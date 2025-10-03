# AC Components

A reusable component library built with Preact.

## Installation

```bash
npm install ac-components
```

## Usage

### Button Component

```jsx
import { Button } from 'ac-components';
import 'ac-components/dist/ac-components.css';

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
