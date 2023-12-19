import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o component
    const { container } = render(<Main />)

    //busca o elemneto e verifica a existência
    expect(
      screen.getByRole('heading', { name: /react Avançado/i })
    ).toBeInTheDocument()

    //gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
