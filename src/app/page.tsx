import { Box, Button, Container, Typography } from "@mui/material";

export default function Home() {
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
              width: 1/2,
              aspectRatio: "16/9",
              paddingX: "5%",
              paddingY: 3,
              position: "absolute",
              left: 24,
              top: "auto",
              bottom: "auto",
              borderRadius: "10px",
              display: 'flex',
              flexDirection: 'column', 
              justifyContent: 'space-between',
            }}
            className="bg-secondary text-primary"
          >
            <Typography sx={{ color: "black", fontWeight: "bold" }}>
              محصولات جدید
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", marginY: 1 }}>
              گردش در
              <br />
              کالکشن‌ پاییزی
            </Typography>
            <Typography sx={{ color: "black" }}>
              محصولات جدید در تنوع و کیفیت بسیار بالا و قیمت رقابتی موجود شدند
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
              <Button variant="contained" sx={{ paddingX: 5, paddingY: 2, fontWeight: 'bold', borderRadius: 0, boxShadow: 'none' }}>الان بخرید</Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg"></Container>
    </Box>
  );
}
