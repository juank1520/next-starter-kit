import { setupServer } from "msw/node";

import { getUserByIdSuccess, getUserSuccess } from "./handlers/user.handler";

const handlers = [getUserSuccess, getUserByIdSuccess];

export const server = setupServer(...handlers);
