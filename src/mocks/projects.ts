import type {
  GetRepositoryResponse,
  ListRepositoryCommitsResponse,
} from "../helpers/githubTypes";

export const getMockRepositoryResponse = (): GetRepositoryResponse => {
  return {
    data: {
      description: "A RESTful wrapper around the Wedos API written in Go",
      stargazers_count: getRandomNumber(),
      forks_count: getRandomNumber(),
      language: "Go",
      created_at: "2021-03-28T18:04:04Z",
      topics: ["wapi", "api", "wedos"],
      license: {
        spdx_id: "MIT",
      },
    },
  } as GetRepositoryResponse;
};

export const getMockCommitsResponse = (): ListRepositoryCommitsResponse => {
  return {
    data: {},
  } as ListRepositoryCommitsResponse;
};

export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 1000);
};
