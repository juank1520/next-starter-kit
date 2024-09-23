import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "@/common/interfaces";
import { urls } from "@/common/constants";

const { usersUrl } = urls;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: usersUrl.base,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => usersUrl.getUsers,
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => usersUrl.getUserById.replace("{{id}}", id),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
