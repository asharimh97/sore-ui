// eslint-disable-next-line no-use-before-define
import React from "react";
import { Meta } from "@storybook/react";
import { Category } from "../hierarchy";

import { Form } from "../../src/Form";

export const StoriesForm = () => (
  <Form onSubmit={() => {}}>
    <div>
      <p>Label 1</p>
      <input type="text" />
    </div>
    <div>
      <p>Label 2</p>
      <input type="text" />
    </div>
    <div>
      <p>Label 3</p>
      <input type="text" />
    </div>
  </Form>
);

export default {
  title: `${Category.FORM_COMPONENT}Form`,
} as Meta;
