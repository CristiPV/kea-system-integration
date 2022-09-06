import { Router } from "express";

export const usersRouter = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns "lol".
 */
usersRouter.get("/", (req, res) => {
  res.send("lol");
});
