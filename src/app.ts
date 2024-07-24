import "express-async-errors";
import "reflect-metadata";

import cors from "cors";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleError.middlewares";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swaggerOptions";

import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use(handleErrorMiddleware);

export default app;
