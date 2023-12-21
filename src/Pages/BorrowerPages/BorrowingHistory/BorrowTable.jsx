import React from "react";
import { Typography } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const rows = [
  {
    equipmentName: "Nikon",
    equipmentModel: "D300",
    equipmentQuantity: 1,
    serialNumber: "N300-1029-1929",
    officeInCharge: "ITRO",
    purposeOfBorrowing: "Academic Purposes",
    startingDate: "2023-12-15",
    endingDate: "2023-12-17",
  }
];

function BorrowTable() {
  return (
    <div>
      <Typography variant="h3" gutterBottom style={{
        paddingBottom: "15px", fontWeight: "bold"
      }}>
        Borrowing History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Equipment Name</TableCell>
              <TableCell>Equipment Model</TableCell>
              <TableCell>Equipment Quantity</TableCell>
              <TableCell>Serial Number</TableCell>
              <TableCell>Office-In-Charge</TableCell>
              <TableCell>Purpose of Borrowing</TableCell>
              <TableCell>Starting Date</TableCell>
              <TableCell>Ending Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.equipmentName}</TableCell>
                <TableCell>{row.equipmentModel}</TableCell>
                <TableCell>{row.equipmentQuantity}</TableCell>
                <TableCell>{row.serialNumber}</TableCell>
                <TableCell>{row.officeInCharge}</TableCell>
                <TableCell>{row.purposeOfBorrowing}</TableCell>
                <TableCell>{row.startingDate}</TableCell>
                <TableCell>{row.endingDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BorrowTable;