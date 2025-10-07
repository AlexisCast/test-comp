// Example usage of AC Components color system

// 1. TypeScript/JavaScript usage
import { colors, semanticColors, primary, neutral } from 'ac-components';

// Basic color usage
const buttonStyles = {
  backgroundColor: colors.primary[500], // #0ea5e9
  color: colors.white,
  padding: '12px 24px',
  border: `1px solid ${colors.primary[600]}`,
  borderRadius: '4px',
};

// Semantic color usage (recommended)
const cardStyles = {
  backgroundColor: semanticColors.background.primary,
  color: semanticColors.text.primary,
  border: `1px solid ${semanticColors.border.primary}`,
  padding: '16px',
};

// Component state colors
const alertStyles = {
  success: {
    backgroundColor: colors.success[50],
    color: colors.success[700],
    border: `1px solid ${colors.success[200]}`,
  },
  warning: {
    backgroundColor: colors.warning[50],
    color: colors.warning[700],
    border: `1px solid ${colors.warning[200]}`,
  },
  error: {
    backgroundColor: colors.error[50],
    color: colors.error[700],
    border: `1px solid ${colors.error[200]}`,
  },
};

// Using individual palette imports
const textColors = {
  primary: neutral[900],
  secondary: neutral[600],
  tertiary: neutral[400],
  brand: primary[500],
};

export { buttonStyles, cardStyles, alertStyles, textColors };
