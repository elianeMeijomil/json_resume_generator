import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders jsx to make a resume card', () => {
  //render(<Card />);
  const name = screen.getByText(/learn react/i);
  expect(name).toBeInTheDocument();
});
