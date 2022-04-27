import { Sidebar } from './Sidebar';

export default {
    title: 'DevChallenges/Sidebar',
    component: Sidebar,
  };

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});

Default.args = {
    background: "#f0f8ff",
    color: "#a5a5a5",
}