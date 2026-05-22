---
name: "Write Unit Tests for React Components"
description: "Quick checklist for writing Jest unit tests for React components in the stadzbenz Next.js project"
keywords: ["testing", "jest", "unit-tests", "react", "components"]
invocationHints: ["write unit test", "add test for", "create test", "test component"]
applyTo:
  - "app/**/*.tsx"
  - "components/**/*.tsx"
  - "components/**/*.ts"
priority: "default"
---

# Write Unit Tests for React Components

Quick checklist for writing unit tests for React components using Jest and Testing Library in the stadzbenz project.

## Prerequisite: Setup (One-time)

If Jest is not yet installed, run:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-node
```

Add `jest.config.js` to project root:
```js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: ['**/__tests__/**/*.test.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
}

module.exports = createJestConfig(customJestConfig)
```

Create `jest.setup.js`:
```js
import '@testing-library/jest-dom'
```

Update `package.json` scripts:
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## Quick Checklist: Writing a Component Test

### 1. **Create Test File**
   - [ ] Place file next to component: `MyComponent.tsx` → `MyComponent.test.tsx`
   - [ ] Or use `__tests__/` folder: `components/__tests__/MyComponent.test.tsx`

### 2. **Import Essentials**
```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyComponent from '@/components/MyComponent'
```

### 3. **Write Test Structure**
```typescript
describe('MyComponent', () => {
  it('should render component', () => {
    render(<MyComponent />)
    expect(screen.getByText('expected text')).toBeInTheDocument()
  })

  it('should handle user interaction', async () => {
    const user = userEvent.setup()
    render(<MyComponent />)
    await user.click(screen.getByRole('button'))
    expect(screen.getByText('updated text')).toBeInTheDocument()
  })
})
```

### 4. **Test Key Behaviors** (Pick relevant ones)
   - [ ] **Rendering**: Component renders without crashing
   - [ ] **Props**: Component displays content from props correctly
   - [ ] **State**: State changes trigger UI updates
   - [ ] **Events**: Click, input, form submission work as expected
   - [ ] **Conditional Rendering**: Conditionals show/hide elements correctly
   - [ ] **API Calls** (if applicable): Mock data fetching with `jest.mock()`
   - [ ] **Accessibility**: Use semantic HTML, ARIA labels

### 5. **Mock Zustand Store** (for cartStore, authStore, etc.)
```typescript
jest.mock('@/lib/authStore', () => ({
  useAuthStore: jest.fn(() => ({
    user: { id: '1', name: 'Test User' },
    logout: jest.fn(),
  })),
}))
```

### 6. **Run Tests**
```bash
npm test                    # Run all tests once
npm run test:watch         # Run in watch mode
npm run test:coverage      # Generate coverage report
```

---

## Best Practices for stadzbenz

- **Use `getByRole()` over `getByText()`** — More accessible and resilient
- **Avoid testing implementation details** — Test behavior, not state mutations
- **Mock external dependencies** — Zustand stores, API calls, Supabase
- **Use `userEvent` over `fireEvent`** — Mimics real user interactions
- **Test one thing per test** — Keep tests focused and readable
- **Name tests clearly** — `it('should...')` pattern helps readability

---

## Example: Testing MenuCard Component

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MenuCard from '@/components/MenuCard'

describe('MenuCard', () => {
  const mockMenu = {
    id: '1',
    name: 'Pizza Margherita',
    price: 50000,
    image: '/pizza.jpg',
  }

  it('should display menu name and price', () => {
    render(<MenuCard menu={mockMenu} />)
    expect(screen.getByText('Pizza Margherita')).toBeInTheDocument()
    expect(screen.getByText('Rp 50.000')).toBeInTheDocument()
  })

  it('should call onAddToCart when add button is clicked', async () => {
    const onAddToCart = jest.fn()
    const user = userEvent.setup()
    render(<MenuCard menu={mockMenu} onAddToCart={onAddToCart} />)
    
    await user.click(screen.getByRole('button', { name: /add/i }))
    expect(onAddToCart).toHaveBeenCalledWith(mockMenu)
  })
})
```

---

## When Testing Navigation/Link Components

For Next.js `<Link>` components:
```typescript
jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>
  }
})
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Cannot find module" | Check `moduleNameMapper` in `jest.config.js` — should map `@/` to project root |
| "ReferenceError: fetch is not defined" | Mock in setup file or test: `global.fetch = jest.fn()` |
| "act(...) warning" | Wrap state updates: `await act(async () => { ... })` |
| "Zustand store not working" | Verify `jest.mock()` path matches actual store import |

