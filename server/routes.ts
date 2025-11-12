import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSignupSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSignupSchema.parse(req.body);
      
      const existing = await storage.getWaitlistSignupByEmail(validatedData.email);
      if (existing) {
        return res.status(400).json({ message: "Email already registered" });
      }

      const signup = await storage.createWaitlistSignup(validatedData);
      res.json({ success: true, signup });
    } catch (error) {
      console.error("Waitlist signup error:", error);
      res.status(400).json({ message: "Invalid data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
