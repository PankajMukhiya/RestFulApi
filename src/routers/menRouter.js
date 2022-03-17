const express = require("express");
const router = new express.Router();

const MenRanking = require("../src/models/menSchema");


router.get("/", (req, res) => {
  res.send("Hello ! welcome to restful api series");
});

// post request : send the data to server
router.post("/mens", async (req, res) => {
  try {
    // const addingMenRecord = new MenRanking({
    //   "ranking": 1,
    //   "name": "christian coleman",
    //   "dob": "06 mar 1996",
    //   "country": "usa",
    //   "score": 1477,
    // });
    // addingMenRecord.save();
    const bodyRequest = req.body;
    const addingMenRecord = new MenRanking(bodyRequest);
    // console.log(bodyRequest);
    const insertMen = await addingMenRecord.save();
    res.status(201).send(insertMen);
  } catch (error) {
    res.status(400).send(error);
    console.log("The Error is:-> ", error);
  }
});

// get request : fetch or find data from the server or find() document
router.get("/mens", async (req, res) => {
  try {
    const getMenRecord = await MenRanking.find({}).sort({ ranking: 1 });
    res.status(200).send(getMenRecord);
    // console.log(getMenRecord);
  } catch (error) {
    res.status(404).send(error);
    console.log("The Error is:-> ", error);
  }
});
// get request : find one data from the server or findById() document
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getOneMenRecord = await MenRanking.findById(_id);
    res.status(200).send(getOneMenRecord);
    // console.log(getOneMenRecord);
  } catch (error) {
    res.status(404).send(error);
    console.log("The Error is:-> ", error);
  }
});

//patch : update data by findByIdAndUpdate()
router.patch("/mens/:id", async (req, res) => {
  try {
    const bodyRequest = req.body;
    const _id = req.params.id;
    const getOneMenRecord = await MenRanking.findByIdAndUpdate(
      _id,
      bodyRequest,
      {
        new: true,
      }
    );
    res.status(200).send(getOneMenRecord);
    console.log(getOneMenRecord);
  } catch (error) {
    res.status(500).send(error);
    console.log("The Error is:-> ", error);
  }
});
//delete : delete data by findByIdAndDelete()
router.delete("/mens/:id", async (req, res) => {
  try {
    // const bodyRequest = req.body;
    const _id = req.params.id;
    const getOneMenRecord = await MenRanking.findByIdAndDelete(_id);
    res.status(200).send(getOneMenRecord, "delete successfully");
    console.log("Delete successfully ");
  } catch (error) {
    res.status(500).send(error);
    console.log("The Error is:-> ", error);
  }
});

module.exports = router;  
