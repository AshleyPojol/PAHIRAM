import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const rows = [
  {
    equipmentName: "Nikon",
    equipmentModel: "D300",
    equipmentQuantity: 2,
    equipmentStatus: "Unpaid",
    serialNumber: "N300-1029-1929",
    officeInvolved: "ITRO",
  },
];

const PenaltyTable = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom style={{
        paddingBottom: "15px"
      }}>
        Penalty Records
      </Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Equipment Name</TableCell>
            <TableCell>Equipment Model</TableCell>
            <TableCell>Equipment Quantity</TableCell>
            <TableCell>Equipment Status</TableCell>
            <TableCell>Serial Number</TableCell>
            <TableCell>Office Involved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.equipmentName}</TableCell>
              <TableCell>{row.equipmentModel}</TableCell>
              <TableCell>{row.equipmentQuantity}</TableCell>
              <TableCell>{row.equipmentStatus}</TableCell>
              <TableCell>{row.serialNumber}</TableCell>
              <TableCell>{row.officeInvolved}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default PenaltyTable;
