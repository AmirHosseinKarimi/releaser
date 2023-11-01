import { Probot } from "probot";
import { releasePublished } from "./releasePublished";
import { releaseCreated } from "./releaseCreated";

export = (app: Probot) => {
  app.on("release.created", releaseCreated);
  app.on("release.published", releasePublished);
};
