import "dotenv/config";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import corsOptions from "./config/corsOptions.js";

import { addRespondToResponse } from "./middleware/response.js";
import { handleError } from "./middleware/errors.js";
import { RouteNotFoundError } from "./errors/customErrors.js";

import { attachPrivateRoutes, attachPublicRoutes } from "./routes.js";

const initializeExpress = () => {
  const app = express();
  const PORT = process.env.PORT;

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use(addRespondToResponse);

  attachPublicRoutes(app);

  // TODO: authentication middleware
  
  attachPrivateRoutes(app);

  app.use((req, _res, next) => next(new RouteNotFoundError(req.originalUrl)));
  app.use(handleError);

  app.listen(PORT, () => console.log(`✓ Express Server Listening on http://localhost:${PORT}`));
};

const initializeApp = async () => {
  initializeExpress();
};

initializeApp();
