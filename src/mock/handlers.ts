import { delay, http, HttpResponse } from "msw";

import { userApiFixture } from "./fixtures";

import { urls } from "@/common/constants";

export const handlers = [
  http.get(`https://jsonplaceholder.typicode.com/users/`, ({ request }) => {
    console.log('Handler', request.method, request.url)
    return HttpResponse.json({ mocked: true })
  }),
  http.get(`https://jsonplaceholder.typicode.com/users/3`, ({ request }) => {
    console.log('Handler', request.method, request.url)
    return HttpResponse.json({ mocked: true })
  }),
];
