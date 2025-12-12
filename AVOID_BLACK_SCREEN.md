# Avoiding Black/White Screen Issues in React Apps

This document serves as a reminder to avoid common pitfalls that cause the application to render a black or white screen (fail to load).

## 1. Conflicting Dependency Resolution (Import Maps vs Bundlers)

### The Problem
When using a build tool (like Vite, Webpack, or Parcel) that expects to resolve dependencies from `node_modules` (or a bundled source), adding an `<script type="importmap">` in `index.html` can cause conflicts.

- **Symptom**: The app loads a blank screen. Console errors might indicate issues with React versions (e.g., "Hooks can only be called inside of the body of a function component" due to multiple React instances) or failed imports.
- **Cause**: The browser attempts to resolve `import React from 'react'` using the CDN link defined in the import map, while the bundler might be trying to bundle a local version. This leads to version mismatches or loading failures.

### The Fix
**Remove `importmap` scripts** when working in a standard bundled environment unless you are specifically architecting a micro-frontend or no-build setup that requires them.

**Incorrect:**
```html
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@..." 
  }
}
</script>
```

**Correct:**
Let the bundler handle imports via `package.json`.

## 2. Missing Entry Point Script

### The Problem
React apps are Single Page Applications (SPAs) that need JavaScript to mount the DOM. If the entry script is missing from the HTML, nothing happens.

### The Fix
Ensure the main entry file (usually `index.tsx` or `main.tsx`) is included in the `<body>` of `index.html`.

```html
<body>
  <div id="root"></div>
  <!-- Essential for Vite/Bundlers -->
  <script type="module" src="./index.tsx"></script>
</body>
```

## 3. Missing Root Element

### The Problem
The React root cannot mount if the target DOM element doesn't exist.

### The Fix
Ensure `<div id="root"></div>` exists in `index.html`.

```typescript
// index.tsx
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element");
```

## Summary Checklist for Future Builds
- [ ] **No Import Maps**: Remove CDN import maps if bundling.
- [ ] **Script Tag**: Verify `<script type="module" src="./index.tsx"></script>` exists.
- [ ] **Root Element**: Verify `<div id="root"></div>` exists.
