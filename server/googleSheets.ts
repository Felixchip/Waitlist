import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-sheet',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Sheet not connected');
  }
  return accessToken;
}

export async function getUncachableGoogleSheetClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.sheets({ version: 'v4', auth: oauth2Client });
}

export async function appendToWaitlistSheet(firstName: string, email: string) {
  try {
    const sheets = await getUncachableGoogleSheetClient();
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID environment variable not set');
    }

    const sheetName = 'Waitlist';
    const timestamp = new Date().toISOString();
    
    const values = [[timestamp, firstName, email]];
    
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:C`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log(`Added to waitlist: ${firstName} (${email})`);
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    throw error;
  }
}

export async function initializeWaitlistSheet() {
  try {
    const sheets = await getUncachableGoogleSheetClient();
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID environment variable not set');
    }

    const sheetName = 'Waitlist';
    
    try {
      const response = await sheets.spreadsheets.get({
        spreadsheetId,
      });

      const sheetExists = response.data.sheets?.some(
        sheet => sheet.properties?.title === sheetName
      );

      if (!sheetExists) {
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: sheetName,
                  },
                },
              },
            ],
          },
        });

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `${sheetName}!A1:C1`,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [['Timestamp', 'First Name', 'Email']],
          },
        });

        console.log(`Created ${sheetName} sheet with headers`);
      }
    } catch (error) {
      console.error('Error initializing waitlist sheet:', error);
    }
  } catch (error) {
    console.error('Error in initializeWaitlistSheet:', error);
  }
}
