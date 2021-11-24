import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Color from "./Color";

export default {
  title: "Example/Color",
  component: Color,
} as ComponentMeta<typeof Color>;

const Template: ComponentStory<typeof Color> = (args) => <Color {...args} />;

export const Col = Template.bind({});
Col.args = {};
