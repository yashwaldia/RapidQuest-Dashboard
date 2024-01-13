// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// import "../StackedGraph/StackedGraph.css";

// const StackedGraph = () => {
//   // Sample data
//   const data = [
//     { name: "", x: 1, y: 3, z: 5 },
//     { name: "A", x: 3, y: 5, z: 7 },
//     { name: "", x: 5, y: 7, z: 9 },
//     { name: "B", x: 7, y: 9, z: 11 },
//     { name: "", x: 9, y: 11, z: 13 },
//     { name: "C", x: 11, y: 13, z: 15 },
//     { name: "", x: 13, y: 15, z: 17 },
//     { name: "D", x: 15, y: 17, z: 19 },
//     { name: "", x: 17, y: 19, z: 21 },
//     { name: "E", x: 20, y: 22, z: 24 },
//     { name: "", x: 23, y: 25, z: 27 },
//     { name: "F", x: 26, y: 28, z: 30 },
//     { name: "", x: 29, y: 31, z: 33 },
//     { name: "G", x: 32, y: 34, z: 36 },
//   ];

//   return (
//     <BarChart width={550} height={250} data={data}>
//       <CartesianGrid />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="x" stackId="a" fill="#00308F" />
//       <Bar dataKey="y" stackId="a" fill="#007FFF" />
//       <Bar dataKey="z" stackId="a" fill="#00FFFF" />
//     </BarChart>
//   );
// };

// export default StackedGraph;
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "../StackedGraph/StackedGraph.css";

const StackedGraph = () => {
  // Sample data
  const data = [
    { name: "", x: 1, y: 3, z: 5 },
    { name: "A", x: 3, y: 5, z: 7 },
    { name: "", x: 5, y: 7, z: 9 },
    { name: "B", x: 7, y: 9, z: 11 },
    { name: "", x: 9, y: 11, z: 13 },
    { name: "C", x: 11, y: 13, z: 15 },
    { name: "", x: 13, y: 15, z: 17 },
    { name: "D", x: 15, y: 17, z: 19 },
    { name: "", x: 17, y: 19, z: 21 },
    { name: "E", x: 20, y: 22, z: 24 },
    { name: "", x: 23, y: 25, z: 27 },
    { name: "F", x: 26, y: 28, z: 30 },
    { name: "", x: 29, y: 31, z: 33 },
    { name: "G", x: 32, y: 34, z: 36 },
    // Your data here
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="x" stackId="a" fill="#00308F" />
        <Bar dataKey="y" stackId="a" fill="#007FFF" />
        <Bar dataKey="z" stackId="a" fill="#00FFFF" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedGraph;
