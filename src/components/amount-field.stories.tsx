import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { AmountField } from "./amount-field";

const meta = {
  component: AmountField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "MF/AmountField",
} satisfies Meta<typeof AmountField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AmountFieldDefault: Story = {
  args: {
    onChange: () => {},
    value: 2000,
  },
  render: (args) => {
    const [inputValue, setInputValue] = useState(args.value);

    return (
      <AmountField
        {...args}
        onChange={(val) => setInputValue(val === "" ? 0 : parseInt(val))}
        value={inputValue}
      />
    );
  },
};
