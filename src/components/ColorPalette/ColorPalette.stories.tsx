import type { Meta, StoryObj } from '@storybook/preact';
import { ColorPalette } from './ColorPalette';

const meta: Meta<typeof ColorPalette> = {
  title: 'Design System/ColorPalette',
  component: ColorPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive color palette component that displays all available colors in the design system. This component showcases the complete color scale with proper naming conventions and semantic usage.',
      },
    },
  },
  argTypes: {
    categories: {
      control: {
        type: 'multi-select',
        options: [
          'primary',
          'secondary', 
          'neutral',
          'success',
          'warning',
          'error',
          'info',
          'base',
          'semantic',
          'background',
          'text',
          'border'
        ],
      },
      description: 'Filter to show only specific color categories',
    },
    compact: {
      control: 'boolean',
      description: 'Display colors in a compact view with smaller swatches',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const AllColors: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Complete color palette showing all available colors organized by category in compact view.',
      },
    },
  },
};

export const PrimaryColors: Story = {
  args: {
    categories: ['primary'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary color scale - the main brand colors used throughout the interface in compact view.',
      },
    },
  },
};

export const SemanticColors: Story = {
  args: {
    categories: ['success', 'warning', 'error', 'info'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Semantic colors used for feedback, status indicators, and messaging in compact view.',
      },
    },
  },
};

export const NeutralColors: Story = {
  args: {
    categories: ['neutral', 'secondary'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Neutral and secondary colors for backgrounds, borders, and subtle elements in compact view.',
      },
    },
  },
};

export const FunctionalColors: Story = {
  args: {
    categories: ['background', 'text', 'border'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Functional colors with semantic names for specific UI purposes like backgrounds, text, and borders in compact view.',
      },
    },
  },
};

export const CompactView: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Compact view showing all colors with smaller swatches and minimal labels (default behavior).',
      },
    },
  },
};

export const FullView: Story = {
  args: {
    compact: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Full view showing all colors with larger swatches and complete labels for detailed reference.',
      },
    },
  },
};

export const BrandColors: Story = {
  args: {
    categories: ['primary', 'secondary', 'semantic'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Core brand colors including primary, secondary, and their semantic aliases in compact view.',
      },
    },
  },
};

export const SystemColors: Story = {
  args: {
    categories: ['base', 'neutral', 'background', 'text', 'border'],
  },
  parameters: {
    docs: {
      description: {
        story: 'System-level colors for interface foundations including base colors, neutrals, and functional colors in compact view.',
      },
    },
  },
};
