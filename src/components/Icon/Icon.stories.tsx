import type { Meta, StoryObj } from '@storybook/preact';
import { BaseIcon, type Icon } from './Icon';


const meta: Meta<Icon> = {
  title: 'UI/Icon',
  component: BaseIcon,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    iconName: {
      control: 'select',
      options: ['EmptyBattery', 'FullBattery'],
    },
    className: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A flexible icon component that supports different variants, sizes, and icon types.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<Icon>;

export const Default: Story = {
  args: {
    iconName: 'EmptyBattery',
    variant: 'default',
    size: 'md',
  },
  render: (args) => <BaseIcon {...args} />,
};

export const Primary: Story = {
  args: {
    iconName: 'FullBattery',
    variant: 'primary',
    size: 'md',
  },
  render: (args) => <BaseIcon {...args} />,
};

export const Secondary: Story = {
  args: {
    iconName: 'EmptyBattery',
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => <BaseIcon {...args} />,
};

export const Small: Story = {
  args: {
    iconName: 'FullBattery',
    variant: 'default',
    size: 'sm',
  },
  render: (args) => <BaseIcon {...args} />,
};

export const Medium: Story = {
  args: {
    iconName: 'EmptyBattery',
    variant: 'default',
    size: 'md',
  },
  render: (args) => <BaseIcon {...args} />,
};

export const Large: Story = {
  args: {
    iconName: 'FullBattery',
    variant: 'default',
    size: 'lg',
  },
  render: (args) => <BaseIcon {...args} />,
};

export const EmptyBatteryIcon: Story = {
  args: {
    iconName: 'EmptyBattery',
    variant: 'default',
    size: 'md',
  },
  render: (args) => <BaseIcon {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Shows the empty battery icon.',
      },
    },
  },
};

export const FullBatteryIcon: Story = {
  args: {
    iconName: 'FullBattery',
    variant: 'default',
    size: 'md',
  },
  render: (args) => <BaseIcon {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Shows the full battery icon.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <BaseIcon iconName="EmptyBattery" size="sm" variant="default" />
      <BaseIcon iconName="EmptyBattery" size="md" variant="default" />
      <BaseIcon iconName="EmptyBattery" size="lg" variant="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays all available sizes (small, medium, large) for comparison.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <BaseIcon iconName="FullBattery" variant="default" size="md" />
      <BaseIcon iconName="FullBattery" variant="primary" size="md" />
      <BaseIcon iconName="FullBattery" variant="secondary" size="md" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays all available variants (default, primary, secondary) for comparison.',
      },
    },
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <BaseIcon iconName="EmptyBattery" variant="default" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Empty Battery</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BaseIcon iconName="FullBattery" variant="default" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Full Battery</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays all available icons with labels.',
      },
    },
  },
};