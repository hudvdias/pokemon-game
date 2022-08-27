import { Box, styled } from "@mui/material";

export const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  backgroundColor: theme.palette.grey[200],
}));
