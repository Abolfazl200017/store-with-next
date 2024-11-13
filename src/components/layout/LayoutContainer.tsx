import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

export const LayoutContainer: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "20px 1fr 20px",
        alignItems: "center",
        justifyItems: "center",
        minHeight: "100svh",
        padding: 0,
        margin: 0,
        gap: "64px",
        paddingTop: '15px',
      }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
