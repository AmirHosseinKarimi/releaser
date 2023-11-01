import { Context } from "probot";
import generateName from "./utils/generateName";

export const releaseCreated = async (context: Context<"release.created">) => {
  const {
    payload: { release, repository },
  } = context;

  const releaseName = generateName();

  await context.octokit.repos.updateRelease({
    owner: repository.owner.login,
    repo: repository.name,
    release_id: release.id,
    name: [release.tag_name, releaseName].filter((i) => !!i).join(" - "),
    body: [
      `**Release Info**`,
      `- Version: ${release.tag_name || "-"}`,
      `- Name: ${releaseName}`,
    ].join("\n"),
  });
};
