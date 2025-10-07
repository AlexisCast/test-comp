# AC Components

A reusable component library built with Preact.

## Installation

```bash
npm install ac-components
```

## Usage

**🎉 CSS is now automatically included!** You no longer need to manually import CSS files.

### Default Usage (Recommended - CSS Auto-included)

```jsx
import { Button, Input, ColorPalette } from 'ac-components';
// That's it! CSS is automatically injected when components are imported
```

### Alternative Usage (Manual CSS Import)

If you prefer to manage CSS separately, you can use:

```jsx
import { Button } from 'ac-components/with-css';
import 'ac-components/css';
```

### Button Component

```jsx
import { Button } from 'ac-components';

function App() {
  return (
    <Button
      primary={true}
      size="medium"
      label="Click me!"
      onClick={() => console.log('Button clicked!')}
    />
  );
}
```

### Props

#### Button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `primary` | boolean | `false` | Primary styling variant |
| `backgroundColor` | string | `null` | Custom background color |
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Button size |
| `label` | string | required | Button text |
| `onClick` | function | - | Click handler |

## Development

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Build the library
npm run build

# Build Storybook
npm run build-storybook
```

## License

MIT# test-comp
