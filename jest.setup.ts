import "whatwg-fetch";
import "@testing-library/jest-dom";
import { userApi } from "./src/store/services/userApi";

import { server } from "@/mock/server";
beforeAll(async () => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  userApi.util.resetApiState();
});

afterAll(() => {
  server.close();
});
