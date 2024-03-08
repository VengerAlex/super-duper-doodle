import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'Clear Button',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline Button',
        theme: ThemeButton.OUTLINE,
    },
};
