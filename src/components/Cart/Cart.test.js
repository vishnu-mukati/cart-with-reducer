import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Cart from './Cart';

describe('Cart component', () => {
    test('render h2 tag', () => {
        // Arrange
        // render(<Cart />);

        render(
            <Provider store={store}>
              <Cart />
            </Provider>
          );

        //Act 
        // ... nothing

        //Assert
        const HtagElement = screen.getByText('No products added to the cart.',);
        expect(HtagElement).toBeInTheDocument;
    });
})
