import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreativeSolutions from "./pages/CreativeSolutions";
import MarketingAgency from "./pages/MarketingAgency";
import ITServices from "./pages/ITServices";
import StrategicMarketing from "./pages/services/StrategicMarketing";
import B2BMarketing from "./pages/services/B2BMarketing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/creative-solutions" element={<CreativeSolutions />} />
          <Route path="/marketing-agency" element={<MarketingAgency />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/services/strategic-marketing" element={<StrategicMarketing />} />
          <Route path="/services/b2b-marketing" element={<B2BMarketing />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;