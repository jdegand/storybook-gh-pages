import React from 'react';

import { Button } from './Button';

import cart from './assets/cart-plus.svg';

const image = {
  src: cart,
  alt: 'Add to Cart',
};

export default {
  title: 'DevChallenges/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});

Primary.args = {
  ...Default.args,
  background: "primary",
  color: "#fff",
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...Primary.args,
  color: "#a5a5a5",
  disabled: true,
  label: "Disabled"
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
  background: "secondary",
};

export const Outline = Template.bind({});

Outline.args = {
  ...Primary.args,
  background: "outline",
  color: "#2962ff",
};

export const Danger = Template.bind({});

Danger.args = {
  ...Primary.args,
  background: "danger",
};

export const StartIcon = Template.bind({});

StartIcon.args = {
  ...Primary.args,
  startIcon: image.src,
  alt: image.alt,
};

export const EndIcon = Template.bind({});

EndIcon.args = {
  ...Primary.args,
  endIcon: image.src,
  alt: image.alt,
};

export const Text = Template.bind({});

Text.args = {
  ...Default.args,
  background: "text",
  disableShadow: true,
  color: "#2962ff",
};