
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import "./App.css";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Books from "@/pages/Books";
import BookDetail from "@/pages/BookDetail";
import Categories from "@/pages/Categories";
import CategoryDetail from "@/pages/CategoryDetail";
import NotFound from "@/pages/NotFound";
import RefTaggerLoader from "@/components/categories/RefTaggerLoader";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookId" element={<BookDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryId" element={<CategoryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <RefTaggerLoader />
      <Toaster />
      <Sonner />
    </QueryClientProvider>
  );
}

export default App;
