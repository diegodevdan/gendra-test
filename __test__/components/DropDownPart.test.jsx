import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Linking } from 'react-native';
import DropDownPart from '../../src/components/screens/Details/DropDownPart';

describe('DropDownPart', () => {
  const mockData = {
    rol: 'buyer',
    name: 'John Doe',
    identifier: {
      legalName: 'John Doe Inc.',
      uri: 'https://johndoe.com',
    },
    address: {
      streetAddress: '123 Main St',
      locality: 'Anytown',
      region: 'CA',
    },
    id: '12345',
    contactPoint: {
      name: 'Jane Smith',
      telephone: '555-555-5555',
      email: 'jane@smith.com',
    },
  };

  it('renders the component with the correct data', () => {
    const { getByText } = render(<DropDownPart {...mockData} />);
    expect(getByText('John Doe')).toBeDefined();
    expect(getByText('Id:')).toBeDefined();
    expect(getByText('12345')).toBeDefined();
    expect(getByText('Rol:')).toBeDefined();
    expect(getByText('Comprador')).toBeDefined();
    expect(getByText('Identificador:')).toBeDefined();
    expect(getByText('John Doe Inc.')).toBeDefined();
    expect(getByText('Dirección:')).toBeDefined();
    expect(getByText('123 Main St, Anytown CA')).toBeDefined();
    expect(getByText('Contacto')).toBeDefined();
    expect(getByText('Nombre:')).toBeDefined();
    expect(getByText('Jane Smith')).toBeDefined();
    expect(getByText('Teléfono:')).toBeDefined();
    expect(getByText('555-555-5555')).toBeDefined();
    expect(getByText('email:')).toBeDefined();
    expect(getByText('jane@smith.com')).toBeDefined();
  });

  it('opens the identifier link when pressed', () => {
    const { getByText } = render(<DropDownPart {...mockData} />);
    const link = getByText('John Doe Inc.');
    fireEvent.press(link);
    expect(Linking.openURL).toHaveBeenCalledWith('https://johndoe.com');
  });
});