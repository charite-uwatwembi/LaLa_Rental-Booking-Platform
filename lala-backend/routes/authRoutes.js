import express from "express";
import { verifyGoogleToken } from "../config/googleAuth.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/google-login", async (req, res) => {
  try {
    const { token } = req.body;
    const payload = await verifyGoogleToken(token);

    let user = await User.findOne({ googleId: payload.sub });

    if (!user) {
      user = await User.create({
        googleId: payload.sub,
        name: payload.name,
        email: payload.email,
        role: "Renter",
      });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: "Google authentication failed" });
  }
});

export default router;
