import type { Meta, StoryObj } from '@storybook/preact';
import { fn } from 'storybook/test';

import { Button, type ButtonProps } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonProps> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { 
      control: 'color',
      description: 'Custom background color for the button',
    },
    onClick: { 
      action: 'onClick',
      description: 'Function called when the button is clicked',
    },
    primary: {
      control: 'boolean',
      description: 'Whether the button uses primary styling',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the button',
    },
    label: {
      control: 'text',
      description: 'Text content of the button',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Primary UI component for user interaction. Supports different sizes, variants, and custom styling.',
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
  render: (args) => <Button {...args} />,
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
  render: (args) => <Button {...args} />,
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
  render: (args) => <Button {...args} />,
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
  render: (args) => <Button {...args} />,
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Button',
  },
  render: (args) => <Button {...args} />,
};

export const CustomBackgroundColor: Story = {
  args: {
    primary: true,
    label: 'Custom Color',
    backgroundColor: '#ff6b6b',
  },
  render: (args) => <Button {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Button with a custom background color.',
      },
    },
  },
};

export const LongLabel: Story = {
  args: {
    primary: true,
    label: 'This is a button with a very long label text',
  },
  render: (args) => <Button {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Button with a long text label to test text wrapping.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button size="small" label="Small" primary />
      <Button size="medium" label="Medium" primary />
      <Button size="large" label="Large" primary />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays all available button sizes for comparison.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button label="Primary" primary />
      <Button label="Secondary" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays both primary and secondary button variants.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    primary: true,
    label: 'Click me!',
  },
  render: (args) => <Button {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive button that logs clicks in the Actions panel.',
      },
    },
  },
};
