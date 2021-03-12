import * as React from 'react'
import "@testing-library/jest-dom/extend-expect";
import {render} from '@testing-library/react'
import HandwritingPractice from '../components/HandwritingPractice/HandwritingPractice'

test('shows the children when the checkbox is checked', () => {
  const { container } = render(<HandwritingPractice />)

  expect(container).toMatchSnapshot()
})