import React from "react";
import { Box } from "@mui/material";

const InnerContainer = ({ children }) => (
  <Box sx={{ bgcolor: "neutral.background"}}
    elevation={3}
    style={{
      paddingTop: "24px",
      paddingBottom: "24px",
      width: "auto",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </Box>
);

export default InnerContainer;
