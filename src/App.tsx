
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import BookDetail from "./pages/BookDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import RefTaggerLoader from "./components/categories/RefTaggerLoader";
import { ThemeProvider } from "./components/ThemeProvider";
import { useEffect } from "react";

// Create a global query client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Helper function to get initial theme
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("cristo-biblia-theme");
  if (savedTheme && (savedTheme === "dark" || savedTheme === "light" || savedTheme === "system")) {
    return savedTheme;
  }
  
  return "light"; // Default theme if none saved
};

const App = () => (
  <ThemeProvider defaultTheme={getInitialTheme()} storageKey="cristo-biblia-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
        <RefTaggerLoader />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
