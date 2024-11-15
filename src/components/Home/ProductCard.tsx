import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import Link from "next/link";
import { Product } from "@/services/api/types";

const ProductCard = ({ product }: { product: Product }) => (
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
        title={product.title}
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
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
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
);

export default ProductCard;
