import type {Endpoints} from "@octokit/types/dist-types/generated/Endpoints";

export type GetRepositoryResponse =
  Endpoints["GET /repos/{owner}/{repo}"]["response"];

export type ListRepositoryCommitsResponse =
  Endpoints["GET /repos/{owner}/{repo}/commits"]["response"];

export type ListRepositoryContributorsResponse =
  Endpoints["GET /repos/{owner}/{repo}/contributors"]["response"];
