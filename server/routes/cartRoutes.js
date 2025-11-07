import express from "express";
const router = express.Router({});

router.get("/all", (req, res) => {
  res.send("all Cart Items");
});

export default router;
