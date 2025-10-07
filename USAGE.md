# Usage Examples

## Using in a Preact Project

### 1. Install the library
```bash
npm install ac-components
```

### 2. Import and use components
```tsx
// App.tsx
import { Button, Input, Icon, ColorPalette } from 'ac-components';

export function App() {
  return (
    <div>
      <h1>My App using AC Components</h1>
      
      {/* Button examples */}
      <Button variant="primary" size="md">
        Primary Button
      </Button>
      
      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>
      
      {/* Input example */}
      <Input 
        type="email"
        placeholder="Enter your email"
        onChange={(e) => console.log(e.target.value)}
      />
      
      {/* Icon example */}
      <Icon 
        iconName="FullBattery"
        size="lg"
        variant="primary"
      />
      
      {/* Color palette */}
      <ColorPalette />
    </div>
  );
}
```

### 3. Package.json peerDependencies
Make sure your consuming project has preact installed:
```json
{
  "dependencies": {
    "preact": "^10.27.0",
    "ac-components": "^0.1.0"
  }
}
```

## Using in a React Project

Since Preact components are compatible with React, you can use them in React projects too:

```tsx
import { Button, Input } from 'ac-components';

function MyReactComponent() {
  return (
    <div>
      <Button onClick={() => alert('Hello from AC Components!')}>
        Click me
      </Button>
      <Input placeholder="This works in React too!" />
    </div>
  );
}
```

## Build Outputs

The library provides multiple build formats:

- **ESM**: `dist/index.esm.js` - For modern bundlers (Vite, Webpack 5+)
- **CommonJS**: `dist/index.cjs.js` - For Node.js and older bundlers  
- **UMD**: `dist/ac-components.umd.js` - For browser script tags
- **TypeScript**: `dist/index.d.ts` - Type definitions
- **CSS**: `dist/index.css` - Separate CSS file (optional)

## With CSS-in-JS (Default)
```tsx
import { Button } from 'ac-components';
// Styles are automatically included
```

## With Separate CSS
```tsx
import { Button } from 'ac-components/dist/index-with-css.esm.js';
import 'ac-components/dist/index.css';
```

## Available Components

- `Button` - Customizable button with variants and sizes
- `Input` - Form input with validation styles  
- `Icon` - Icon component with built-in icon set
- `ColorPalette` - Component to display color schemes

All components are fully typed with TypeScript!
