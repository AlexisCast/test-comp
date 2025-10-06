import type { Meta, StoryObj } from '@storybook/preact';
import { Input, InputWithExclamation } from './Input';
import type { InputProps } from './Input';

const meta: Meta<InputProps> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'filled'],
    },
    iconName: {
      control: { type: 'select' },
      options: ['EmptyBattery', 'FullBattery', 'Exclamation'],
      description: 'Icon to display in the input field',
    },
    iconVariant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    error: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithExclamationIcon: Story = {
  args: {
    label: 'Alert Input',
    placeholder: 'This field has an exclamation icon',
    startIcon: true,
    iconName: 'Exclamation',
    iconVariant: 'primary',
  },
};

export const CompoundWithExclamation: Story = {
  render: (args) => (
    <InputWithExclamation
      {...args}
      label="Warning Input"
      placeholder="This uses the InputWithExclamation component"
    />
  ),
  args: {
    iconVariant: 'primary',
  },
};

export const ErrorState: Story = {
  render: () => (
    <Input
      label="Required Field"
      placeholder="This field has an error"
      required={true}
      error={true}
      children="Warning: Please check this field for accuracy"
    />
  ),
};

export const InvalidState: Story = {
  render: () => (
    <Input
      label="Invalid Field"
      placeholder="This field is invalid or empty"
      required={true}
      invalid={true}
      children="This field is required and cannot be empty"
    />
  ),
};

export const InvalidStateWithErrorText: Story = {
  render: () => (
    <Input
      label="Email Address"
      placeholder="Enter a valid email address"
      required={true}
      invalid={true}
      children="Please enter a valid email address in the correct format"
    />
  ),
};

export const ErrorAndInvalidStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input
        label="Error State"
        placeholder="Field with warning"
        required={true}
        error={true}
        children="Warning: Please verify this information"
      />
      <Input
        label="Invalid State"
        placeholder="Field with validation error"
        required={true}
        invalid={true}
        children="Error: This field is required and cannot be empty"
      />
      <Input
        label="Normal State"
        placeholder="Normal field for comparison"
        required={true}
        children="This is a helpful hint for the user"
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    startIcon: true,
    iconName: 'Exclamation',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <InputWithExclamation
        label="Default Variant"
        placeholder="Default styling"
        variant="default"
      />
      <InputWithExclamation
        label="Outline Variant"
        placeholder="Outline styling"
        variant="outline"
      />
      <InputWithExclamation
        label="Filled Variant"
        placeholder="Filled styling"
        variant="filled"
      />
    </div>
  ),
};

export const IconVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <InputWithExclamation
        label="Default Icon"
        placeholder="Default icon color"
        iconVariant="default"
      />
      <InputWithExclamation
        label="Primary Icon"
        placeholder="Primary icon color"
        iconVariant="primary"
      />
      <InputWithExclamation
        label="Secondary Icon"
        placeholder="Secondary icon color"
        iconVariant="secondary"
      />
    </div>
  ),
};

export const IconTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input
        label="Empty Battery Icon"
        placeholder="Input with empty battery icon"
        startIcon={true}
        iconName="EmptyBattery"
        iconVariant="primary"
      />
      <Input
        label="Full Battery Icon"
        placeholder="Input with full battery icon"
        startIcon={true}
        iconName="FullBattery"
        iconVariant="primary"
      />
      <Input
        label="Exclamation Icon"
        placeholder="Input with exclamation icon"
        startIcon={true}
        iconName="Exclamation"
        iconVariant="primary"
      />
    </div>
  ),
};

export const WithoutIcon: Story = {
  args: {
    label: 'Simple Input',
    placeholder: 'No icon here',
    startIcon: false,
  },
};

export const WithHelperText: Story = {
  render: () => (
    <Input
      label="Username"
      placeholder="Enter your username"
      children="Must be at least 3 characters long"
    />
  ),
};

export const WithErrorText: Story = {
  render: () => (
    <Input
      label="Email Address"
      placeholder="Enter your email"
      required={true}
      error={true}
      children="Please enter a valid email address"
    />
  ),
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required and shows exclamation icon',
    required: true,
  },
};

export const RequiredVsOptional: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input
        label="Required Field"
        placeholder="Shows exclamation icon because required=true"
        required={true}
      />
      <Input
        label="Optional Field"
        placeholder="No icon because required=false"
        required={false}
      />
    </div>
  ),
};

export const DynamicIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input
        label="Battery Level"
        placeholder="Check your battery"
        startIcon={true}
        iconName="EmptyBattery"
        iconVariant="secondary"
        children="Battery is running low"
      />
      <Input
        label="Fully Charged"
        placeholder="Battery is full"
        startIcon={true}
        iconName="FullBattery"
        iconVariant="primary"
        children="Battery at 100%"
      />
      <Input
        label="Warning"
        placeholder="Something needs attention"
        startIcon={true}
        iconName="Exclamation"
        iconVariant="primary"
        error={true}
        children="This field requires your attention"
      />
    </div>
  ),
};
