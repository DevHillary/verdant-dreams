import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagePreloader from "@/components/PagePreloader";
<<<<<<< HEAD
import ScrollToTop from "@/components/ScrollToTop";
=======
>>>>>>> d3434ac688703c623a9865b0ac311f2dac12e938
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ContactPage from "./pages/ContactPage.tsx";
import EcosystemPage from "./pages/EcosystemPage.tsx";
import Index from "./pages/Index.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import ImpactPage from "./pages/ImpactPage.tsx";
import LivestockPage from "./pages/LivestockPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import SustainabilityPage from "./pages/SustainabilityPage.tsx";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isLoading);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isLoading]);

  return (
    <>
      {isLoading && <PagePreloader onComplete={() => setIsLoading(false)} />}
<<<<<<< HEAD
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
=======
      <BrowserRouter>
>>>>>>> d3434ac688703c623a9865b0ac311f2dac12e938
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/livestock" element={<LivestockPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
<<<<<<< HEAD
      <ScrollToTop />
=======
>>>>>>> d3434ac688703c623a9865b0ac311f2dac12e938
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
