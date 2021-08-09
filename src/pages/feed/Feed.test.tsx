import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from '../../components/App'
import Feed from './Feed'

test('renders Feed without crash', () => {
  render(<Feed />)
})

test('focus post panel', async () => {
  render(<Feed />)

  const postPanel = screen.getByRole('post_panel')
  expect(postPanel).toBeInTheDocument()

  const postInput = postPanel.querySelector(
    "input[placeholder='Escribe Aquí tu estado']",
  )
  if (!postInput) {
    throw 'Unable to find Post Input'
  }

  fireEvent.focus(postInput)

  let charLimitLabel
  await waitFor(() => (charLimitLabel = screen.getByText('0/255')))
  expect(charLimitLabel).toHaveTextContent('0/255')
})

test('generate a post', async () => {
  render(<App />)

  const postPanel = screen.getByRole('post_panel')
  expect(postPanel).toBeInTheDocument()

  const postInput: HTMLInputElement = postPanel.querySelector(
    "input[placeholder='Escribe Aquí tu estado']",
  ) as HTMLInputElement
  if (!postInput) {
    throw 'Unable to find Post input'
  }

  fireEvent.focus(postInput)

  const postButton = screen.getByRole('post_button')
  if (!postButton) throw 'Unable to find Post button'

  fireEvent.change(postInput, { target: { value: 'Mock post from test' } })
  expect(postInput.value).toBe('Mock post from test')

  fireEvent.click(postButton)

  let newPost
  await waitFor(() => (newPost = screen.getByRole('post_0')))

  expect(newPost).toBeInTheDocument()
})
