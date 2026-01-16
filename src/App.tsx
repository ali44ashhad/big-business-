import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Trades from "./pages/Trades";
import Warehouses from "./pages/Warehouses";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

/* ✅ Loader UI */
const PageLoader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
  </div>
);

/* ✅ Handles route change + loading + scroll reset */
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);

      // ✅ Scroll to top after loader finishes
      window.scrollTo({
        top: 0,
        behavior: "instant" as ScrollBehavior
      });
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
    <Header/>
      {loading && <PageLoader />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
