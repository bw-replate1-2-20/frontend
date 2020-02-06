import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, Tooltip, Legend } from "recharts";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const COLORS = ["#EC6D12", "#014A73"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

let data;
let tableData;

export default function Analytics() {
  const [doneLoading, setLoading] = useState(false);
  useEffect(() => {
    data = [
      { name: "Completed", value: 0 },
      { name: "Requested", value: 0 }
    ];
    tableData = {
      total: 0,
      delivered: 0,
      requested: 0,
      inTransit: 0,
      accepted: 0
    };
    axiosWithAuth()
      .get("api/requests")
      .then(res => {
        console.log("ue response", res);
        tableData.total = res.data.length;
        res.data.forEach(request => {
          if (request.delivered) {
            data[0].value = data[0].value + 1;
            tableData.delivered = tableData.delivered + 1;
            return;
          } else if (!request.delivered && request.picked_up) {
            data[1].value = data[1].value + 1;
            tableData.inTransit = tableData.inTransit + 1;
            return;
          } else if (
            !request.delivered &&
            !request.picked_up &&
            request.volunteer_id
          ) {
            data[1].value = data[1].value + 1;
            tableData.accepted = tableData.accepted + 1;
            return;
          } else {
            data[1].value = data[1].value + 1;
            tableData.requested = tableData.requested + 1;
          }
        });
      })
      .then(res => setLoading(true));
  }, []);

  return (
    <Container maxWidth="xs">
      <h2 style={{ textAlign: "center" }}>Request Analytics</h2>
      <Paper elevation={3}>
        {doneLoading && (
          <PieChart
            width={500}
            height={400}
            onMouseEnter={PureComponent.onPieEnter}
            style={{ width: "100%", height: "100%", marginBottom: "40px" }}
          >
            <Pie
              data={data}
              cx={185}
              cy={185}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={130}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}
        {doneLoading && (
          <TableContainer component={Paper}>
            <Table /* className={classes.table}  */ aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell align="right">{tableData.total}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Requested</TableCell>
                  <TableCell align="right">{tableData.requested}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reserved</TableCell>
                  <TableCell align="right">{tableData.accepted}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>In Transit</TableCell>
                  <TableCell align="right">{tableData.inTransit}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Delivered</TableCell>
                  <TableCell align="right">{tableData.delivered}</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Container>
  );
}
