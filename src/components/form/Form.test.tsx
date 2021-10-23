import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Form } from './Form';

describe('Form tests', () => {

  it('should render without handler', () => {
    render(<Provider store={store}><Form /></Provider>);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('should render with handler', () => {
    render(<Provider store={store}><Form handlerSubmit={jest.fn()} /></Provider>);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });
});