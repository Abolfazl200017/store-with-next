import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2 as Grid,
  Pagination,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { productsService } from "@/services/api/productsService";
import { Product } from "@/services/api/types";
import PaginationClient from "./Pagination";

type CategoriesImage = {
  name: string;
  img: string;
};
const categoriesImage: CategoriesImage[] = [
  {
    name: "لوازم الکترونیکی",
    img: "/images/categories/electronics.jpg",
  },
  {
    name: "جواهرات",
    img: "/images/categories/jewelery.jpg",
  },
  {
    name: "پوشاک مردانه",
    img: "images/categories/men's clothing.jpg",
  },
];

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
        <Box
          sx={{
            width: 1,
            aspectRatio: 16 / 9,
            objectFit: "cover",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="/images/Banner.png"
            sx={{ objectFit: "cover", width: 1, height: 1 }}
          />
          <Box
            sx={{
              width: 1 / 2,
              aspectRatio: "16/9",
              paddingX: "5%",
              paddingY: 3,
              position: "absolute",
              left: 24,
              top: "auto",
              bottom: "auto",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            className="bg-secondary text-primary"
          >
            <Typography
              sx={{
                color: "black",
                fontWeight: "bold",
                display: { xs: "none", md: "block" },
              }}
            >
              محصولات جدید
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginY: 1,
                fontSize: { xs: "1rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              گردش در
              <br />
              کالکشن‌ پاییزی
            </Typography>
            <Typography
              sx={{ color: "black", display: { xs: "none", md: "block" } }}
            >
              محصولات جدید در تنوع و کیفیت بسیار بالا و قیمت رقابتی موجود شدند
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
            >
              <Button
                variant="contained"
                sx={{
                  paddingX: { xs: 1, sm: 3, md: 5 },
                  paddingY: { xs: 1, md: 2 },
                  fontWeight: "bold",
                  borderRadius: 0,
                  boxShadow: "none",
                }}
              >
                الان بخرید
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ marginTop: 8 }}>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            width: 1,
            textAlign: "center",
          }}
        >
          کاوش در دسته‌بندی‌ها
        </Typography>
        <Typography
          sx={{
            fontSize: "1.25rem",
            color: "grey",
            width: 1,
            textAlign: "center",
          }}
        >
          با دسته‌بندی‌های متنوع در مجموعه کالاهایی که به دنبال آن هستید بگردید
        </Typography>

        <Grid container spacing={2} sx={{ marginTop: 8 }}>
          {categoriesImage.map((category) => (
            <Grid key={category.name} size={4}>
              <Link href={"/" + category.name}>
                <Box
                  sx={{
                    width: 1,
                    aspectRatio: 3 / 4,
                    borderRadius: 3,
                    overflow: "hidden",
                    p: 1,
                    border: 1,
                    borderColor: "#dedede",
                  }}
                >
                  <Box
                    component="img"
                    src={category.img}
                    sx={{ width: 1, height: 1, objectFit: "contain" }}
                  ></Box>
                </Box>
                <Typography
                  sx={{
                    width: 1,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    mt: 3,
                  }}
                >
                  {category.name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Typography
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
          {products && products.length ? (
            products
              .slice((page - 1) * perPage, page * perPage)
              .map((product: Product) => (
                <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <Link href={`product/${product.id}`}>
                    <Card
                      sx={{
                        boxShadow: "none",
                        borderRadius: 0,
                        border: 1,
                        borderColor: "#f4f5f7",
                      }}
                      className="bg-grey"
                    >
                      <CardMedia
                        sx={{
                          aspectRatio: "1/1",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundColor: "white",
                        }}
                        image={product.image}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            fontWeight: "bold",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {product.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {product.category}
                        </Typography>
                        <Typography
                          sx={{
                            color: "black",
                            fontWeight: "bold",
                            mt: 1,
                            fontSize: "1.5 rem",
                          }}
                        >
                          {product.price}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          variant="text"
                          sx={{
                            backgroundColor: "white",
                            borderRadius: 0,
                            px: 3,
                            py: 1,
                          }}
                        >
                          افزودن به سبد
                        </Button>
                      </CardActions>
                    </Card>
                  </Link>
                </Grid>
              ))
          ) : (
            <>loading</>
          )}
        </Grid>
        <Box sx={{ mt: 5, width: 1, display: "flex", justifyContent: "center" }}>
          <PaginationClient
            total={products ? Math.ceil(products.length / perPage) : 0}
            currentPage={page}
          />
        </Box>
      </Container>
    </Box>
  );
}
