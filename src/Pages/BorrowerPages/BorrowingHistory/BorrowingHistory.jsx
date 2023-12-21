import React from "react";
import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import BorrowTable from "./BorrowTable";
import { Typography } from "@mui/material";

// import PropTypes from "prop-types";

function BorrowingHistory() {
  return <MainDisplayLayout>
    <BorrowTable />
  </MainDisplayLayout>;
}

export default BorrowingHistory;
