// eslint-disable-next-line no-use-before-define
import React from "react";
import { Meta } from "@storybook/react";
import { Category } from "../hierarchy";

import { Textarea as BaseTextarea } from "../../src/Form";

export const Textarea = () => {
  const [val, setVal] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(event.target.value);
  };
  return (
    <BaseTextarea
      value={val}
      onChange={handleChange}
      height="200px"
      w="400px"
    />
  );
};

export default {
  title: `${Category.FORM_COMPONENT}Textarea`,
} as Meta;
