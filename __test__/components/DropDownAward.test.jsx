import React from 'react';
import { render } from '@testing-library/react-native';
import DropDownAward from '../../src/components/screens/Details/DropDownAward';

describe('DropDownAward', () => {
  const props = {
    supplier: 'Supplier Name',
    title: 'Contract Title',
    startDate: '2022-01-01',
    endDate: '2022-12-31',
    value: 123456789,
    currency: 'USD',
  };

  it('renders the supplier name as the title', () => {
    const { getByText } = render(<DropDownAward {...props} />);
    expect(getByText(props.supplier)).toBeDefined();
  });

  it('renders the contract title', () => {
    const { getByText } = render(<DropDownAward {...props} />);
    expect(getByText(props.title)).toBeDefined();
  });

  it('renders the start and end dates', () => {
    const { getByText } = render(<DropDownAward {...props} />);
    expect(getByText('Inicio del contrato:')).toBeDefined();
    expect(getByText('31 de Diciembre del 2021')).toBeDefined();
    expect(getByText('Fin del contrato:')).toBeDefined();
    expect(getByText('30 de Diciembre del 2022')).toBeDefined();
  });

  it('renders the contract value and currency', () => {
    const { getByText } = render(<DropDownAward {...props} />);
    expect(getByText('Valor del contrato:')).toBeDefined();
    expect(getByText('$ 123,456,789 USD')).toBeDefined();
  });
});