import Layout from "@/components/layout";
import { productsService } from "@/services/api/productsService";
import { Box, Button, Container, Rating, Typography } from "@mui/material";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const id = (await params).productId;
  console.log(id);
  const { product } = await productsService.getSingleProduct(id);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout>
      <Box sx={{ py: 5, width: 1 }} className="bg-secondary">
        <Container maxWidth="lg">
          <Typography sx={{}}>
            {`خانه  > ‌ محصولات  >  ${product.title}`}
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: "center", gap: 5 }}>
          <Box component="img" src={product.image} sx={{ width: { xs: 1, sm: 1/3 }, mb: { xs: 3, sm: 0 } }} />
          <Box>
            <Typography variant="h1">{product.title}</Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "grey", fontSize: "2.5rem", mt: 1 }}
            >
              {product.price} $
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Rating name="read-only" value={product.rating.rate} readOnly />
              <Box sx={{ height: '50px', width: '1px', backgroundColor: 'grey', mx: 3 }} />
              <Typography sx={{ color: 'grey' }}>
                {`دیدگاه ${product.rating.count} کاربر`}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '0.9rem', mt: 2 }}>
              {product.description}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt:3, gap: 3 }}>
              <Button size="large" variant="outlined" sx={{ color: 'black', borderColor: 'black', borderRadius: 3, height: '60px' }}>
                افزودن به سبد خرید
              </Button>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 1, borderColor: 'grey', borderRadius: 3, color: 'black', height: '60px' }}>
                <Button variant="text" sx={{ color: 'black', fontSize: '1.5rem', height: 1, ":hover": { backgroundColor: 'transparent' } }}>
                  -
                </Button>
                <Typography sx={{ px: 1 }}>
                  2
                </Typography>
                <Button variant="text" sx={{ color: 'black', fontSize: '1.1rem', height: 1, ":hover": { backgroundColor: 'transparent' } }}>
                  +
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
