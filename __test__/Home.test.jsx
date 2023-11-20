import { render, screen } from '@testing-library/react';
import Home from '@app/page';

it('should have desc text', () => {
  render(<Home />);

  const pEl = screen.getByText(
    'Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts'
  );

  expect(pEl).toBeInTheDocument();
});
