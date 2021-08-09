import { render, screen } from '@testing-library/react'
import Feed from './Feed'

test('render without crash', () => {
  render(<Feed />)
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
})
