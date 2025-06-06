import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db";
import { JWT_Password } from "./config";
import { userMiddleware } from "./middleware";
import { random } from "./utilis";
const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    await UserModel.create({
      username: username,
      password: password,
    });

    res.status(200).json({
      message: "User signed up",
    });
  } catch (e) {
    res.status(411).json({
      message: "User already exists",
    });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await UserModel.findOne({
    username,
    password,
  });
  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_Password
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credientials",
    });
  }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;

  await ContentModel.create({
    link,
    type,

    //@ts-ignore
    userId: req.userId,
    tags: [],
  });

  res.json({
    message: "Content added",
  });
});

app.get("/api/v1/content", async (req, res) => {
  //@ts-ignore
  const userId = req.body.userId;
  const content = await ContentModel.find({
    userId: userId,
  }).populate("userId");
  res.json({
    content,
  });
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const contentId = req.body.contentId;
  await ContentModel.deleteMany({
    contentId,
    //@ts-ignore
    userId: req.userId,
  });
});

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
  const share = req.body.share;
  if (share) {
    await LinkModel.create({
      //@ts-ignore
      userId: req.userId,
      hash: random(8),
    });
  } else {
    await LinkModel.deleteOne({
      //@ts-ignore
      userId: req.userId,
    });
  }
  res.json({
    message: "Update Shareable Link",
  });
});

app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;

  const link = await LinkModel.findOne({
    hash,
  });

  if (!link) {
    res.status(411).json({
      message: "Sorry incorrect input",
    });
    return;
  }

  const content = await ContentModel.find({
    userId: link.userId,
  });
  const user = await UserModel.findOne({
    _id: link.userId,
  });

  if (!user) {
    res.status(411).json({
      message: "user not found, error should ideally not happen",
    });
  }
  res.json({
    username: user?.username,
    content: content,
  });
});

app.listen(3000);
