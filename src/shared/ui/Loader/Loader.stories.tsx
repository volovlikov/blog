import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        background: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
