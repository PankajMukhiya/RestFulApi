const express = require("express");
const app = express();
const port = process.env.PORT || 3333;
require("../src/db/dbConnection");
const router = require("../src/routers/menRouter");
const MenRanking = require("../src/models/menSchema");

//here: app.use(express.json()) used becoz of req.body data store in json formate
app.use(express.json());

// router
app.use(router);


// app.get("/", (req, res) => {
//   res.send("Hello ! welcome to restful api series from app.js");
// });

// // post request : send the data to server
// app.post("/mens", async (req, res) => {
//   try {
//     // const addingMenRecord = new MenRanking({
//     //   "ranking": 1,
//     //   "name": "christian coleman",
//     //   "dob": "06 mar 1996",
//     //   "country": "usa",
//     //   "score": 1477,
//     // });
//     // addingMenRecord.save();
//     const bodyRequest = req.body;
//     const addingMenRecord = new MenRanking(bodyRequest);
//     // console.log(bodyRequest);
//     const insertMen = await addingMenRecord.save();
//     res.status(201).send(insertMen);
//   } catch (error) {
//     res.status(400).send(error);
//     console.log("The Error is:-> ", error);
//   }
// });

// // get request : fetch or find data from the server or find() document
// app.get("/mens", async (req, res) => {
//   try {
//     const getMenRecord = await MenRanking.find({}).sort({ ranking: 1 });
//     res.status(200).send(getMenRecord);
//     // console.log(getMenRecord);
//   } catch (error) {
//     res.status(404).send(error);
//     console.log("The Error is:-> ", error);
//   }
// });
// // get request : find one data from the server or findById() document
// app.get("/mens/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const getOneMenRecord = await MenRanking.findById(_id);
//     res.status(200).send(getOneMenRecord);
//     // console.log(getOneMenRecord);
//   } catch (error) {
//     res.status(404).send(error);
//     console.log("The Error is:-> ", error);
//   }
// });

// //patch : update data by findByIdAndUpdate()
// app.patch("/mens/:id", async (req, res) => {
//   try {
//     const bodyRequest = req.body;
//     const _id = req.params.id;
//     const getOneMenRecord = await MenRanking.findByIdAndUpdate(
//       _id,
//       bodyRequest,
//       {
//         new: true,
//       }
//     );
//     res.status(200).send(getOneMenRecord);
//     console.log(getOneMenRecord);
//   } catch (error) {
//     res.status(500).send(error);
//     console.log("The Error is:-> ", error);
//   }
// });
// //delete : delete data by findByIdAndDelete()
// app.delete("/mens/:id", async (req, res) => {
//   try {
//     // const bodyRequest = req.body;
//     const _id = req.params.id;
//     const getOneMenRecord = await MenRanking.findByIdAndDelete(_id);
//     res.send(getOneMenRecord);
//     console.log("Delete successfully ");
//   } catch (error) {
//     res.status(500).send(error);
//     console.log("The Error is:-> ", error);
//   }
// });

// server
app.listen(port, () => {
  console.log(`Connection is listen at successfully : ${port}`);
});
