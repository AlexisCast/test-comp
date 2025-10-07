import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test the build outputs
console.log('🔍 Testing Rollup Build Output\n');

// Check if all expected files exist
const expectedFiles = [
  'dist/index.cjs.js',
  'dist/index.esm.js', 
  'dist/ac-components.umd.js',
  'dist/index.css',
  'dist/index.d.ts'
];

expectedFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const stats = fs.statSync(file);
    console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)}KB)`);
  } else {
    console.log(`❌ ${file} - Missing!`);
  }
});

// Test CommonJS exports
try {
  // Note: We'll test this by just checking if the file is valid JS
  const cjsContent = fs.readFileSync('./dist/index.cjs.js', 'utf8');
  if (cjsContent.includes('exports') && cjsContent.length > 0) {
    console.log('\n📦 CommonJS build appears valid');
  } else {
    console.log('\n❌ CommonJS build may have issues');
  }
} catch (error) {
  console.log('\n❌ CommonJS File Error:', error.message);
}

// Check TypeScript definitions
try {
  const dtsContent = fs.readFileSync('dist/index.d.ts', 'utf8');
  const exportCount = (dtsContent.match(/export/g) || []).length;
  console.log(`\n📋 TypeScript Definitions: ${exportCount} exports found`);
} catch (error) {
  console.log('\n❌ TypeScript Definitions Error:', error.message);
}

console.log('\n🎉 Build verification complete!');
