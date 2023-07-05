import React from 'react';
import { render } from '@testing-library/react-native';
import CardTender from '../../src/components/screens/Home/CardTender';

describe('CardTender', () => {
  it('should render the title', () => {
    const { getByText } = render(<CardTender title="Test Title" />);
    expect(getByText('Test Title')).toBeDefined();
  });

  it('should render the date', () => {
    const { getByText } = render(<CardTender date="2022-02-22T22:22:22Z" />);
    expect(getByText('22 de Febrero de 2022 - 16:22 PM')).toBeDefined();
  });

  it('should render the ocid', () => {
    const { getByText } = render(<CardTender ocid="Test OCID" />);
    expect(getByText('Test OCID')).toBeDefined();
  });

  it('should render the contracts', () => {
    const { getByText } = render(<CardTender contracts={3} />);
    expect(getByText('3 - Contratos')).toBeDefined();
  });

  it('should render the parties', () => {
    const { getByText } = render(<CardTender parties={5} />);
    expect(getByText('5 - Participantes')).toBeDefined();
  });

  it('should render the winners', () => {
    const { getByText } = render(<CardTender winners={1} />);
    expect(getByText('1 - Ganador')).toBeDefined();
  });
});