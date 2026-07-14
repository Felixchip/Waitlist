import { useEffect } from "react";
import { Router, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Router base="/Waitlist">
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Router>
    </TooltipProvider>
  );
}

export default App;
