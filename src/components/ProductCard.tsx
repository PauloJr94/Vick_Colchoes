import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  description?: string;
  price: number;
  discount?: number;
  image_url?: string;
  category?: string;
  is_featured?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  image_url,
}: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image_url || "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <CardContent className="p-3 md:p-4 space-y-2 flex-1">
        <h3 className="font-semibold text-foreground text-base md:text-lg line-clamp-2 min-h-[2.75rem] group-hover:text-accent transition-colors">
          {name}
        </h3>
        
        {description && (
          <p className="hidden md:block text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}

        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg md:text-2xl font-bold text-foreground leading-none">
              R$ {price.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-0 md:p-4">
        <Button
          className="w-full h-9 text-xs md:h-10 md:text-sm bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group/btn"
          onClick={() => navigate(`/produto/${id}`)}
        >
          <Eye className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4 group-hover/btn:scale-110 transition-transform" />
          Visualizar Item
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
