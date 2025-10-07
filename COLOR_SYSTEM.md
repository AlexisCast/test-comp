# AC Components - Simplified Color System

A streamlined, easy-to-use color palette focused on real-world usage.

## Installation & Usage

```bash
npm install ac-components
```

## Quick Start

```typescript
import { colors } from 'ac-components';

// Simple, direct color usage
const buttonStyles = {
  backgroundColor: colors.primary,    // #0ea5e9
  color: colors.white,
  border: `1px solid ${colors.gray[300]}`,
};

// Semantic colors for consistency
const cardStyles = {
  backgroundColor: colors.background.primary,
  color: colors.text.primary,
  border: `1px solid ${colors.border.default}`,
};
```

## Color Structure

### **Brand Colors** (Single values)
```typescript
colors.primary    // #0ea5e9 - Main brand color
colors.success    // #22c55e - Success states
colors.warning    // #f59e0b - Warning states  
colors.error      // #ef4444 - Error states
colors.info       // #3b82f6 - Info states
```

### **Gray Scale** (Most commonly used)
```typescript
colors.gray[50]   // #fafafa - Lightest backgrounds
colors.gray[100]  // #f5f5f5 - Card backgrounds  
colors.gray[200]  // #e5e5e5 - Borders
colors.gray[300]  // #d4d4d4 - Disabled states
colors.gray[400]  // #a3a3a3 - Placeholder text
colors.gray[500]  // #737373 - Secondary text
colors.gray[600]  // #525252 - Body text
colors.gray[700]  // #404040 - Labels
colors.gray[800]  // #262626 - Headings
colors.gray[900]  // #171717 - Primary text
```

### **Semantic Colors** (Recommended)
```typescript
// Text
colors.text.primary    // #171717 - Main text
colors.text.secondary  // #525252 - Secondary text
colors.text.muted      // #a3a3a3 - Muted text
colors.text.inverse    // #ffffff - White text

// Backgrounds  
colors.background.primary    // #ffffff - White background
colors.background.secondary  // #fafafa - Light gray background
colors.background.muted      // #f5f5f5 - Muted background

// Borders
colors.border.default  // #e5e5e5 - Default border
colors.border.muted    // #d4d4d4 - Muted border  
colors.border.focus    // #0ea5e9 - Focus border
```

### **Base Colors**
```typescript
colors.white  // #ffffff
colors.black  // #000000  
```

## Examples

### React/Preact Component

```tsx
import { colors } from 'ac-components';

const Button = ({ variant = 'primary', children }) => {
  const variants = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.white,
    },
    secondary: {
      backgroundColor: colors.background.secondary,
      color: colors.text.primary,
      border: `1px solid ${colors.border.default}`,
    },
    danger: {
      backgroundColor: colors.error,
      color: colors.white,
    },
  };

  return <button style={variants[variant]}>{children}</button>;
};
```

### CSS-in-JS

```javascript
import styled from 'styled-components';
import { colors } from 'ac-components';

const Card = styled.div`
  background: ${colors.background.primary};
  color: ${colors.text.primary};
  border: 1px solid ${colors.border.default};
  border-radius: 8px;
  
  &:hover {
    border-color: ${colors.border.focus};
    box-shadow: 0 0 0 3px ${colors.gray[100]};
  }
`;
```

### Tailwind Configuration

```javascript
// tailwind.config.js
import { colors } from 'ac-components';

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        info: colors.info,
        gray: colors.gray,
      },
    },
  },
};
```

## ColorPalette Component

```tsx
import { ColorPalette } from 'ac-components';

// Show all colors
<ColorPalette />

// Show specific sections
<ColorPalette categories={['brand', 'gray', 'text']} />
```

## Why Simplified?

✅ **Easier to remember** - `colors.primary` vs `colors.primary[500]`  
✅ **Fewer decisions** - Only essential colors included  
✅ **Better performance** - Smaller bundle, faster builds  
✅ **Less maintenance** - One source of truth  
✅ **More practical** - Focus on commonly used colors  

## Migration from Complex System

```typescript
// Old way ❌
colors.primary[500]     
colors.neutral[900]     
semanticColors.text.primary

// New way ✅  
colors.primary          
colors.gray[900]        
colors.text.primary
```

## TypeScript Support

```typescript
import type { Colors, ColorValue } from 'ac-components';

const myColors: Colors = colors;
const textColor: ColorValue = colors.text.primary;
```

## Best Practices

1. **Use semantic colors** for consistent theming
2. **Primary color sparingly** - only for main CTAs
3. **Gray scale for most UI** - text, borders, backgrounds
4. **State colors for feedback** - success, warning, error states
5. **Test accessibility** - ensure sufficient contrast ratios

The simplified system provides everything you need while eliminating complexity! 🎨
