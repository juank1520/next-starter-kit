// import "@testing-library/jest-dom";
//@ts-ignore
const nodeFetch = require('node-fetch')
//@ts-ignore
global.fetch = nodeFetch
//@ts-ignore
global.Request = nodeFetch.Request
import { server } from "@/mock/server";

beforeAll(async () => {
  server.listen({onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
