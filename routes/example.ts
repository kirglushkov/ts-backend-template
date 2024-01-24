import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    res.send("V(=^･ω･^=)v")
});

export default router;