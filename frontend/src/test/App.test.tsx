import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    // Check that Portfolio text exists (there are multiple instances)
    expect(screen.getAllByText(/Portfolio/i)).toHaveLength(2)
  })

  it('renders navigation links', () => {
    render(<App />)
    // Use getByRole for navigation links to be more specific
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('renders header with logo link', () => {
    render(<App />)
    // Check for the header logo link specifically
    const logoLink = screen.getByRole('link', { name: /Portfolio/i })
    expect(logoLink).toBeInTheDocument()
    expect(logoLink).toHaveAttribute('href', '/')
  })
}) 