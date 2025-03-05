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
import PWAPrompt from "./components/PWAPrompt"; // Pb2ed

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
      <PWAPrompt /> {/* P7a8e */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
