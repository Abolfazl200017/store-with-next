import * as React from "react";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { productsService } from "@/services/api/productsService";

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


export default function Home() {
  productsService.getAllProducts().then(console.log)

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
            <Typography sx={{ color: "black", fontWeight: "bold", display: { xs: 'none', md: 'block'} }}>
              محصولات جدید
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", marginY: 1, fontSize: { xs: '1rem', sm: '2rem', md: '2.5rem' } }}>
              گردش در
              <br />
              کالکشن‌ پاییزی
            </Typography>
            <Typography sx={{ color: "black", display: { xs: 'none', md: 'block'} }}>
              محصولات جدید در تنوع و کیفیت بسیار بالا و قیمت رقابتی موجود شدند
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
            >
              <Button
                variant="contained"
                sx={{
                  paddingX: { xs: 1, sm: 3, md: 5},
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
        <Grid container spacing={2} sx={{ marginTop: 8 }}>
          
        </Grid>
      </Container>
    </Box>
  );
}
