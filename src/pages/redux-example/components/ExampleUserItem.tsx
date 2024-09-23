import React from "react";

import { User } from "@/common/interfaces";

interface Props {
  user: User;
}
export const ExampleUserItem = ({ user }: Props) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.userName}</p>
      <p>{user.email}</p>
    </div>
  );
};
