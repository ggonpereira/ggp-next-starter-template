import * as React from 'react'
import { render, waitFor } from '@testing-library/react'
import { axe } from '@/utils/test-utils'
import { RootLayout } from './RootLayout'

describe('<RootLayout />', () => {
  const testId = 'component-root-layout-id'

  it('should render the RootLayout component with no a11y violations', async () => {
    const { queryByTestId, container } = render(<RootLayout testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())

    const acessibilityResults = await axe(container.innerHTML)
    expect(acessibilityResults).toHaveNoViolations()
  })
})
