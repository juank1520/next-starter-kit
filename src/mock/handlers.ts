import { rest } from "msw";

import { userApiFixture } from "./fixtures";

export const handlers = [
  rest.get(`https://jsonplaceholder.typicode.com/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([...userApiFixture.useGetUsersQuerySuccess]),
    );
  }),
  rest.get(`https://jsonplaceholder.typicode.com/users/3`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ mocked: true }));
  }),
];
