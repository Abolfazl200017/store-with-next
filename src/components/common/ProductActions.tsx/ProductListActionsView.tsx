import { theme } from "@/theme/theme";
import { Box, Button, Typography } from "@mui/material";

export type BasketActions = {
  isProductInBasket: boolean;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  handleAddToBasket: () => void;
  getQuantity: () => number;
};

function ProductListActionsView ({ isProductInBasket, increaseQuantity, decreaseQuantity ,handleAddToBasket, getQuantity }: BasketActions) {
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
  )
}

export default ProductListActionsView