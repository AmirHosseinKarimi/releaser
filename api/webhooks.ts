import { createNodeMiddleware, createProbot } from "probot";
import app from "../src/app";

module.exports = createNodeMiddleware(app, {
  probot: createProbot(),
  webhooksPath: "api/webhooks",
});
