"use client";
import { Box } from "@mui/material";
import useBasketStore from "@/store/basketStore";

export default function BasketPage() {
  const { products } = useBasketStore();

  return <Box>
    basket works
  </Box>;
}
