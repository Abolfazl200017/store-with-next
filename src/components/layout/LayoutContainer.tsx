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
        padding: 0,
        margin: 0,
      }}
    >
      <Box sx={{ minHeight: "100vh", paddingX: "auto" }}>
        <Header />
        <Box component="main" sx={{ minHeight: "100%" }}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
