import { configureAxe } from 'jest-axe'
export * from '@testing-library/react'

export const axe = configureAxe({
  rules: {
    // Disabled because not all components need landmarks
    region: { enabled: false },
  },
})

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/login',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }
  },
}))

export const useRouter = jest.spyOn(require('next/router'), 'useRouter')
