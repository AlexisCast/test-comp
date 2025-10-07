// Simplified color palette for ac-components
// Focus on essential colors that are actually used

export const colors = {
  // Primary brand color
  primary: '#0ea5e9',
  
  // State colors
  success: '#22c55e',
  warning: '#f59e0b', 
  error: '#ef4444',
  info: '#3b82f6',
  
  // Neutral scale (most commonly used)
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#fafafa',   // lightest backgrounds
    100: '#f5f5f5',  // card backgrounds
    200: '#e5e5e5',  // borders
    300: '#d4d4d4',  // disabled states
    400: '#a3a3a3',  // placeholder text
    500: '#737373',  // secondary text
    600: '#525252',  // body text
    700: '#404040',  // labels
    800: '#262626',  // headings
    900: '#171717',  // primary text
  },
  
  // Semantic aliases (most used)
  text: {
    primary: '#171717',
    secondary: '#525252', 
    muted: '#a3a3a3',
    inverse: '#ffffff',
  },
  
  background: {
    primary: '#ffffff',
    secondary: '#fafafa',
    muted: '#f5f5f5',
  },
  
  border: {
    default: '#e5e5e5',
    muted: '#d4d4d4',
    focus: '#0ea5e9',
  },
} as const;

// Simple export for backwards compatibility
export const theme = colors;

// Type definitions
export type Colors = typeof colors;
export type ColorValue = string;

// Default export
export default colors;
