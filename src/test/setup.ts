import '@testing-library/jest-dom';

// Configure CSS processing for tests
// CSS modules will be processed by Vitest through the vitest.config.ts configuration
// This allows testing of actual CSS properties and computed styles

// Define CSS custom properties for testing environment
// This helps jsdom handle CSS variables used in the SCSS files
const styleElement = document.createElement('style');
styleElement.textContent = `
  :root {
    --neutral-300: #d1d5db;
    --neutral-50: #f9fafb;
    --primary-500: #3b82f6;
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --error-500: #ef4444;
    --error-50: #fef2f2;
    --error-100: #fee2e2;
    --neutral-700: #374151;
    --neutral-100: #f3f4f6;
    --neutral-200: #e5e7eb;
    --neutral-900: #111827;
    --neutral-400: #9ca3af;
    --neutral-500: #6b7280;
    --neutral-600: #4b5563;
    --error-600: #dc2626;
  }
`;
document.head.appendChild(styleElement);
