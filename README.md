# Shared Components Library

A comprehensive React component library and utility collection built on top of [@am92/react-design-system](https://www.npmjs.com/package/@am92/react-design-system) for consistent UI development across projects.

## Features

- 🔥 **React 18** - Built with the latest React features
- 🎨 **Design System** - Based on @am92/react-design-system
- 📚 **Storybook** - Component documentation and playground
- ⚡ **Vite** - Fast bundler for development and production
- 🧪 **Vitest** - Modern testing framework with great TypeScript support
- 📦 **TypeScript** - Full type safety
- 🎯 **ESLint + Prettier** - Code quality and formatting
- 🐕 **Husky** - Git hooks with conventional commits
- 🌳 **Tree-shaking** - Optimized bundle size
- 📖 **Auto-generated docs** - Component documentation via Storybook

## Installation

```bash
npm install @your-org/shared-components
# or
yarn add @your-org/shared-components
# or
pnpm add @your-org/shared-components
```

## Usage

```tsx
import { Button, useDebounce, classNames } from '@your-org/shared-components';

function App() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 300);

  return (
    <div className={classNames('app', { 'app--loading': !value })}>
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Click me
      </Button>
    </div>
  );
}
```

## Development

### Prerequisites

- Node.js >= 18
- npm/yarn/pnpm

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd shared-components

# Install dependencies
npm install

# Set up git hooks
npm run prepare
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build the library for production |
| `npm run build:watch` | Build in watch mode |
| `npm test` | Run tests with Vitest |
| `npm run test:ui` | Run tests with UI |
| `npm run test:coverage` | Generate test coverage report |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build Storybook for production |

### Component Development

1. **Create component directory**: `src/components/YourComponent/`
2. **Add component files**:
   - `YourComponent.tsx` - Component implementation
   - `YourComponent.stories.tsx` - Storybook stories
   - `YourComponent.test.tsx` - Unit tests
   - `index.ts` - Exports
3. **Export from main index**: Add to `src/components/index.ts`
4. **Document**: Write JSDoc comments and Storybook stories

### Commit Convention

This project uses [Conventional Commits](https://conventionalcommits.org/). Commit messages should follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements
- `ci`: CI/CD changes
- `build`: Build system changes

Examples:
```bash
git commit -m "feat: add new Button component"
git commit -m "fix: resolve Button disabled state styling"
git commit -m "docs: update README with installation instructions"
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Button/         # Component directory
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   └── index.ts
├── utils/              # Utility functions
│   ├── helpers/        # Helper functions
│   ├── validators/     # Validation functions
│   ├── formatters/     # Formatting functions
│   └── index.ts
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── constants/          # Application constants
└── index.ts           # Main export file
```

## Testing

- **Unit Tests**: Using Vitest + React Testing Library
- **Coverage**: Aim for 80%+ test coverage
- **Testing Utilities**: Custom render helpers in `tests/`

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Generate coverage
npm run test:coverage
```

## Building

```bash
# Build for production
npm run build

# Build in watch mode (for development)
npm run build:watch
```

## Storybook

View component documentation and test components in isolation:

```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## Publishing

```bash
# Build and test before publishing
npm run prepublishOnly

# Publish to npm
npm publish
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit using conventional commits: `git commit -m "feat: add amazing feature"`
6. Push to the branch: `git push origin feat/amazing-feature`
7. Open a Pull Request

## License

MIT © Your Organization