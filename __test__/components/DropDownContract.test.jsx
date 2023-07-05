import React from 'react';
import { render, screen } from '@testing-library/react-native';
import DropDownContract from '../../src/components/screens/Details/DropDownContract';

describe('DropDownContract', () => {
  const props = {
    supplier: 'ACME Inc.',
    title: 'Contract Title',
    description: 'Contract Description',
    dateSigned: '2022-01-01T00:00:00.000Z',
  };

  it('renders the contract details', () => {
    render(<DropDownContract {...props} />);
    expect(screen.getByText('Contrato:')).toBeDefined();
    expect(screen.getByText('Descripción:')).toBeDefined();
    expect(screen.getByText(props.description)).toBeDefined();
    expect(screen.getByText('Proveedor:')).toBeDefined();
    expect(screen.getByText(props.supplier)).toBeDefined();
    expect(screen.getByText('Firmado el:')).toBeDefined();
    expect(screen.getByText('31 de Diciembre del 2021')).toBeDefined();
  });
});