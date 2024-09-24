import { rest } from "msw";

import { userApiFixture } from "../fixtures";

import { urls } from "@/common/constants";

const { usersUrl } = urls;

export const getUserSuccess = rest.get(
  `${usersUrl.base}${usersUrl.getUsers}`,
  (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([...userApiFixture.useGetUsersQuerySuccess]),
    );
  },
);

export const getUserByIdSuccess = rest.get(
  `${usersUrl.base}${usersUrl.getUserById.replace("{{id}}", "*")}`,
  (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ ...userApiFixture.useGetUsersQuerySuccess[1] }),
    );
  },
);
