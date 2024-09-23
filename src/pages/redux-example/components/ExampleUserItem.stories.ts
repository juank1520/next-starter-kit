import type { Meta, StoryObj } from "@storybook/react";

import { ExampleUserItem } from "@/pages/redux-example/components/ExampleUserItem";

const meta = {
  title: "ExampleUserItem",
  component: ExampleUserItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ExampleUserItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    user: {
      id: "1",
      name: "Name",
      userName: "userName",
      email: "email@gmail.com",
    },
  },
};
