import React from 'react';
import {render, fireEvent} from '@testing-library/react-native'
import Counter from '../../src/components/shared/Counter';

let component;

describe('Counter component', () => {
    beforeEach(() => {
        component = render(<Counter />);
    });

    it('should render correctly', () => {
        expect(component).toBeDefined();
    });
    
    it('should render inital count', () => {
        const component = render(<Counter initialCount={50} />);
        expect(component.getByText('50')).toBeDefined();
    })
    
    it('should increment count', () => {
        const mockFnIncrement = jest.fn();
        const component = render(<Counter initialCount={5} setCount={mockFnIncrement} />);
        const button = component.getByTestId('chevron-increment');
        
        expect(button).toBeDefined();
        
        fireEvent.press(button);
        
        expect(mockFnIncrement).toHaveBeenCalled();
        expect(component.getByText('6')).toBeDefined();
    })
    
    it('should decrement count', () => {
        const mockFnDecrement = jest.fn();
        const component = render(<Counter initialCount={5} setCount={mockFnDecrement} />);
        const button = component.getByTestId('chevron-decrement');
        
        expect(button).toBeDefined();
        
        fireEvent.press(button);
        
        expect(mockFnDecrement).toHaveBeenCalled();
        expect(component.getByText('4')).toBeDefined();
    });
    
    it('should not increase more than the maximum and decrement minus than the minimum', () => {
        const mockFn = jest.fn();
        const component = render(<Counter initialCount={5} setCount={mockFn} max={6} min={4} />);
        const buttonDec = component.getByTestId('chevron-decrement');
        const buttonInc = component.getByTestId('chevron-increment');
        
        fireEvent.press(buttonInc);
        fireEvent.press(buttonInc);
        
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(component.getByText('6')).toBeDefined();

        fireEvent.press(buttonDec);
        fireEvent.press(buttonDec);

        expect(mockFn).toHaveBeenCalledTimes(3);
        expect(component.getByText('4')).toBeDefined();
    });
}
);