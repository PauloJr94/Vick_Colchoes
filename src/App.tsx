import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoryFilterProvider } from "@/hooks/useCategoryFilter";
import { ProductSearchProvider } from "@/hooks/useProductSearchContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Settings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CategoryFilterProvider>
          <ProductSearchProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/produto/:id" element={<ProductDetail />} />
              <Route path="/admin" element={<Login />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/settings" element={<Settings />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ProductSearchProvider>
        </CategoryFilterProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
