import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import Container from "@material-ui/core/Container";

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

export default function Analytics() {
  const [doneLoading, setLoading] = useState(false);
  useEffect(() => {
    data = [
      { name: "Completed", value: 0 },
      { name: "Requested", value: 0 }
    ];
    axiosWithAuth()
      .get("api/requests")
      .then(res => {
        console.log("ue response", res);
        res.data.forEach(request => {
          if (request.delivered) {
            data[0].value = data[0].value + 1;
          } else {
            data[1].value = data[1].value + 1;
          }
        });
      })
      .then(res => setLoading(true));
  }, []);

  return (
    <Container maxWidth="xs">
      <h2 style={{ textAlign: "center" }}>Completed vs. Requested Pickups</h2>
      {doneLoading && (
        <PieChart
          width={500}
          height={400}
          onMouseEnter={PureComponent.onPieEnter}
          style={{ width: "100%", height: "100%" }}
        >
          <Pie
            data={data}
            cx={185}
            cy={150}
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
        </PieChart>
      )}
    </Container>
  );
}
