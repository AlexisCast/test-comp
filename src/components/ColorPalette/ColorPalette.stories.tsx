import type { Meta, StoryObj } from '@storybook/preact';
import { ColorPalette } from './ColorPalette';
import type { ColorPaletteProps } from './ColorPalette';

const meta: Meta<ColorPaletteProps> = {
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
          'brand',
          'gray',
          'text',
          'background',
          'border',
          'base',
          'primary-scale',
          'secondary-scale',
          'neutral-scale',
          'success-scale',
          'warning-scale',
          'error-scale',
          'info-scale'
        ],
      },
      description: 'Filter to show only specific color categories',
    },
  },
};

export default meta;
type Story = StoryObj<ColorPaletteProps>;

export const AllColors: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Complete color palette showing all available colors organized by category.',
      },
    },
  },
};

export const BrandColors: Story = {
  args: {
    categories: ['brand'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Brand color scale - the main brand colors used throughout the interface including primary, success, warning, error, and info colors.',
      },
    },
  },
};

export const GrayScale: Story = {
  args: {
    categories: ['gray'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Gray scale colors for backgrounds, borders, and subtle elements.',
      },
    },
  },
};

export const TextColors: Story = {
  args: {
    categories: ['text'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Text colors with semantic names for different text hierarchies.',
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
        story: 'Functional colors with semantic names for specific UI purposes like backgrounds, text, and borders.',
      },
    },
  },
};

export const BaseColors: Story = {
  args: {
    categories: ['base'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Base colors - pure white and black.',
      },
    },
  },
};

export const SystemColors: Story = {
  args: {
    categories: ['base', 'gray', 'background', 'text', 'border'],
  },
  parameters: {
    docs: {
      description: {
        story: 'System-level colors for interface foundations including base colors, grays, and functional colors.',
      },
    },
  },
};

export const CSSModuleScales: Story = {
  args: {
    categories: ['primary-scale', 'secondary-scale', 'neutral-scale'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete color scales from CSS modules with all shade variations (50-950).',
      },
    },
  },
};

export const SemanticScales: Story = {
  args: {
    categories: ['success-scale', 'warning-scale', 'error-scale', 'info-scale'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Semantic color scales for feedback states with full shade ranges.',
      },
    },
  },
};

export const CompleteColorSystem: Story = {
  args: {
    categories: ['brand', 'primary-scale', 'neutral-scale', 'success-scale', 'warning-scale', 'error-scale'],
  },
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive view combining simplified brand colors with detailed CSS module scales.',
      },
    },
  },
};
