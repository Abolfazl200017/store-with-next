"use client";

import { Product } from "@/services/api/types";
import useBasketStore from "@/store/basketStore";
import { theme } from "@/theme/theme";
import { Box, Button, Typography } from "@mui/material";

const ProductCardAction = ({ product }: { product: Product }) => {
  const { products, addProduct, updateProductQuantity, removeProduct } = useBasketStore();

  const isProductInBasket = products.some((p) => p.id === product.id);
  const handleAddToBasket = () => {
    if (!isProductInBasket) {
      addProduct(product, 1);
    }
  };
  const getQuantity = () => {
    const index: number = products.findIndex((p) => p.id === product.id);
    if (index === -1)
      return 0;
    else return products[index].quantity
  }

  const increaseQuantity = () => {
    const quantity:number = getQuantity();
    updateProductQuantity(product.id.toString(), quantity+1);
  }

  const decreaseQuantity = () => {
    const quantity:number = getQuantity();
    if (quantity <= 1)
      removeProduct(product.id.toString())
    else
      updateProductQuantity(product.id.toString(), quantity-1);
  }

  return (
    <Box>
      {isProductInBasket ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: 1,
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 3,
            color: "black",
            height: "40px",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "black",
              fontSize: "1.5rem",
              height: 1,
              ":hover": { backgroundColor: "transparent" },
            }}
            onClick={decreaseQuantity}
          >
            -
          </Button>
          <Typography sx={{ px: 1 }}>
            {getQuantity()}
          </Typography>
          <Button
            variant="text"
            sx={{
              color: "black",
              fontSize: "1.1rem",
              height: 1,
              ":hover": { backgroundColor: "transparent" },
            }}
            onClick={increaseQuantity}
          >
            +
          </Button>
        </Box>
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
