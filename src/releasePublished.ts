import { Context } from "probot";

export const releasePublished = async (
  context: Context<"release.published">
) => {
  const {
    payload: { release, repository },
  } = context;

  await context.octokit.reactions.createForRelease({
    owner: repository.owner.login,
    repo: repository.name,
    release_id: release.id,
    content: "rocket",
  });
};
