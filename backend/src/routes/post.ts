import express from "express";
import { getPost } from "../models/post";

export const router = express.Router();

router.get("/:id", async (req, res) => {
    const post = await getPost(req.params.id);
    res.send(post);
});
