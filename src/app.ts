import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middlewares";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swaggerOptions";

import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";

const app = express();
app.use(express.json());

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use(handleErrorMiddleware);

export default app;
