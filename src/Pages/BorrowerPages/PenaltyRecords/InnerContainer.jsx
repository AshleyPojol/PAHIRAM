import React from "react";
import Paper from "@mui/material/Paper";

const InnerContainer = ({ children }) => (
  <Paper
    elevation={3}
    style={{
      padding: "20px",
      width: "750px",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </Paper>
);

export default InnerContainer;
