import * as React from "react";
import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { productsService } from "@/services/api/productsService";
import { Product } from "@/services/api/types";
import PaginationClient from "./Pagination";
import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import ProductCard from "@/components/Home/ProductCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsValue = await searchParams;
  const page = Number(searchParamsValue["page"]) || 1;
  const perPage = 8;

  const { products }: { products: Product[] | null } =
    await productsService.getAllProducts();

  return (
    <Box>
      <Container maxWidth="xl" disableGutters>
        <Banner />
      </Container>
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Categories />

        <Typography
          id="products"
          sx={{
            width: 1,
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            mt: 8,
          }}
        >
          محصولات ما
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: 3 }}>
          {products ? (
            products
              .slice((page - 1) * perPage, page * perPage)
              .map((product: Product) => (
                <>
                  <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <ProductCard product={product} />
                  </Grid>
                </>
              ))
          ) : (
            <Box
              sx={{
                width: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box component="img" src="/images/no-data.svg" />
              <Typography sx={{ fontSize: "1.5rem" }}>
                مشکلی در دریافت اطلاعات پیش آمده لطفا مجددا تلاش نمایید
              </Typography>
            </Box>
          )}
        </Grid>
        {products ? (
          <Box
            sx={{
              mt: 5,
              width: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PaginationClient
              total={products ? Math.ceil(products.length / perPage) : 0}
              currentPage={page}
            />
          </Box>
        ) : (
          <></>
        )}
      </Container>
    </Box>
  );
}
