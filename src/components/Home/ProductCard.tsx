import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Product } from "@/services/api/types";
import ProductCardAction from "./ProductCardAction";

const ProductCard = ({ product }: { product: Product }) => (
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
      <Link href={`product/${product.id}`}>
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
      </Link>
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
      <ProductCardAction product={product} />
    </CardActions>
  </Card>
);

export default ProductCard;
