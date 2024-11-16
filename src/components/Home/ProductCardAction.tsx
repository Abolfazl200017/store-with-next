"use client";

import { Product } from "@/services/api/types";
import useBasketStore from "@/store/basketStore";
import { Box, Button, Typography } from "@mui/material";

const ProductCardAction = ({ product }: { product: Product }) => {
  const { products, addProduct } = useBasketStore();

  const isProductInBasket = products.some((p) => p.id === product.id);
  const handleAddToBasket = () => {
    if (!isProductInBasket) {
      addProduct(product, 1);
    }
  };

  return (
    <Box>
      {isProductInBasket ? (
        <Typography
          sx={{
            backgroundColor: "white",
            borderRadius: 0,
            px: 3,
            py: 1,
            fontSize: '0.9rem',
          }}
          className="text-primary"
        >
          موجود در سبد
        </Typography>
      ) : (
        <Button
          variant="text"
          sx={{
            backgroundColor: "white",
            borderRadius: 0,
            px: 3,
            py: 1,
          }}
          onClick={handleAddToBasket}
        >
          افزودن به سبد
        </Button>
      )}
    </Box>
  );
};

export default ProductCardAction;
