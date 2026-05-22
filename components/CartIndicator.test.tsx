import { render, screen } from '@testing-library/react'
import CartIndicator from '@/components/CartIndicator'

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>
  }
})

// Mock the Zustand cartStore
jest.mock('@/stores/cartStore', () => ({
  useCartStore: jest.fn(),
}))

import { useCartStore } from '@/stores/cartStore'

describe('CartIndicator', () => {
  const mockUseCartStore = useCartStore as jest.MockedFunction<typeof useCartStore>

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should not render when cart is empty', () => {
    mockUseCartStore.mockImplementation((selector: any) => {
      const store = {
        getTotalItems: () => 0,
        getTotalPrice: () => 0,
      }
      return selector(store)
    })

    const { container } = render(<CartIndicator />)
    expect(container.firstChild).toBeNull()
  })

  it('should render cart indicator with items and price', () => {
    mockUseCartStore.mockImplementation((selector: any) => {
      const store = {
        getTotalItems: () => 3,
        getTotalPrice: () => 150000,
      }
      return selector(store)
    })

    render(<CartIndicator />)

    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText(/3 items/)).toBeInTheDocument()
    expect(screen.getByText('Rp 150.000')).toBeInTheDocument()
  })

  it('should display singular "item" when totalItems is 1', () => {
    mockUseCartStore.mockImplementation((selector: any) => {
      const store = {
        getTotalItems: () => 1,
        getTotalPrice: () => 50000,
      }
      return selector(store)
    })

    render(<CartIndicator />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText(/1 item$/)).toBeInTheDocument()
  })

  it('should display "99+" when totalItems exceeds 99', () => {
    mockUseCartStore.mockImplementation((selector: any) => {
      const store = {
        getTotalItems: () => 150,
        getTotalPrice: () => 1500000,
      }
      return selector(store)
    })

    render(<CartIndicator />)

    expect(screen.getByText('99+')).toBeInTheDocument()
  })

  it('should link to /checkout', () => {
    mockUseCartStore.mockImplementation((selector: any) => {
      const store = {
        getTotalItems: () => 2,
        getTotalPrice: () => 100000,
      }
      return selector(store)
    })

    render(<CartIndicator />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/checkout')
  })

  it('should format price with Indonesian locale', () => {
    mockUseCartStore.mockImplementation((selector: any) => {
      const store = {
        getTotalItems: () => 1,
        getTotalPrice: () => 1234567,
      }
      return selector(store)
    })

    render(<CartIndicator />)

    expect(screen.getByText('Rp 1.234.567')).toBeInTheDocument()
  })

  it('should display correct item count text', () => {
    mockUseCartStore.mockImplementation((selector: any) => {
      const store = {
        getTotalItems: () => 5,
        getTotalPrice: () => 250000,
      }
      return selector(store)
    })

    render(<CartIndicator />)

    expect(screen.getByText('5 items')).toBeInTheDocument()
  })
})
