import { useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/listbox";

import { User } from "@/common/interfaces";

interface Props {
  users: User[] | undefined;
}
export const ExampleUserItem = ({ users }: Props) => {
  const [selectedKeys, setSelectedKeys] = useState<Set<number>>(new Set([]));

  const onSelectedCaption = (props: Set<number>) => {
    setSelectedKeys(props);
  };

  if (!users) {
    return "loading";
  }

  return (
    <div className="flex flex-col gap-2">
      <Listbox
        aria-label="User selector"
        selectedKeys={selectedKeys}
        selectionMode="single"
        onSelectionChange={(keys) => onSelectedCaption(keys as Set<number>)}
      >
        {users.map((user) => (
          <ListboxItem key={user.id} aria-label={user.name}>
            #{user.id} - {user.name}
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
};
