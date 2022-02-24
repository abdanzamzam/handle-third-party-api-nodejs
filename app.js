const express = require("express");
const app = express();
const port = 3000;


app.get("/synchronous", async (req, res) => {
     // Third party API 1
     const getDataFirst = await new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("First Data");
          }, 1000);
     });

     // Third party API 2
     const getDataSecond = await new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Second Data");
          }, 1000);
     });

     // Third party API 3
     const getDataThird = await new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Third Data");
          }, 2000);
     });

     // Third party API 4
     const getDataFourth = await new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Fourth Data");
          }, 1000);
     });

     // Get data from DB
     const getDataBD = await new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Data from BD");
          }, 1000);
     });

     res.json({
          dataFirst: getDataFirst,
          dataSecond: getDataSecond,
          dataThird: getDataThird,
          dataFourth: getDataFourth,
          dataBD: getDataBD
     });
});

app.get("/asynchronous", async (req, res) => {
     // Third party API 1
     const getDataFirst = new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("First Data");
          }, 1000);
     });

     // Third party API 2
     const getDataSecond = new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Second Data");
          }, 1000);
     });

     // Third party API 3
     const getDataThird = new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Third Data");
          }, 2000);
     });

     // Third party API 4
     const getDataFourth = new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Fourth Data");
          }, 1000);
     });

     // Get data from DB
     const getDataBD = new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Data from BD");
          }, 1000);
     });

     const [dataFirst, dataSecond, dataThird, dataFourth, dataBD] = await Promise.all([
          getDataFirst, 
          getDataSecond, 
          getDataThird, 
          getDataFourth, 
          getDataBD
     ]);

     res.json({
          dataFirst: dataFirst,
          dataSecond: dataSecond,
          dataThird: dataThird,
          dataFourth: dataFourth,
          dataBD: dataBD
     });
});

app.listen(port, () => 
     console.log(`App running on http://localhost:${port}`)
);
