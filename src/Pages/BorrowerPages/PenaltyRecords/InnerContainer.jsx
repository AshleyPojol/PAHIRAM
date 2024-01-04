import React from "react";
import { Box } from "@mui/material";

const InnerContainer = ({ children }) => (
  <Box sx={{ bgcolor: "neutral.background", borderRadius: "16px"}}
    elevation={3}
    style={{
      paddingTop: "2%",
      paddingBottom: "2%",
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
