import React from 'react';

import { Input } from './Input';

import phone from './assets/phone.svg';
import lock from './assets/lock.svg';

const image = {
  src: phone,
  alt: 'Type Phone Number',
};

const image2 = {
  src: lock,
  alt: 'Type Password',
};

export default {
  title: 'DevChallenges/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  fullWidth: true,
};

export const StartIcon = Template.bind({});

StartIcon.args = {
  startIcon: image.src,
  alt: image.alt,
  fullWidth: true,
  helperText: "",
};

export const TextValue = Template.bind({});

TextValue.args = {
  value: 'Text'
};

export const EndIcon = Template.bind({});

EndIcon.args = {
  endIcon: image2.src,
  alt: image2.alt,
};

export const TextArea = Template.bind({});

TextArea.args = {
  multiline: true,
  row: 4,
};