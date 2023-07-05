import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Pagination from '../../src/components/shared/Pagination';

describe('Pagination', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Pagination numberOfPages={5} setPage={() => { }} />);
    expect(getByText('1')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
    expect(getByText('4')).toBeTruthy();
    expect(getByText('5')).toBeTruthy();
  });

  it('renders correctly with less than 5 pages', () => {
    const { getByText } = render(<Pagination numberOfPages={3} setPage={() => { }} />);
    expect(getByText('1')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
  });

  it('renders correctly with more than 5 pages', () => {
    const { getByText } = render(<Pagination numberOfPages={10} setPage={() => { }} />);
    expect(getByText('1')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
    expect(getByText('...')).toBeTruthy();
    expect(getByText('10')).toBeTruthy();
  });

  it('calls setPage with the correct page number when a page is clicked', () => {
    const setPage = jest.fn();
    const { getByText } = render(<Pagination numberOfPages={5} setPage={setPage} />);
    fireEvent.press(getByText('3'));
    expect(setPage).toHaveBeenCalledWith(3);
  });

  it('move to prev page', () => {
    const setPage = jest.fn();
    const { getByTestId } = render(<Pagination page={3} numberOfPages={5} setPage={setPage} />);
    const previousButton = getByTestId('previous-button');
    expect(previousButton).toBeDefined();

    fireEvent.press(previousButton);
    expect(setPage).toHaveBeenCalledWith(2);
  });

  it('move to next page', () => {
    const setPage = jest.fn();
    const { getByTestId } = render(<Pagination page={3} numberOfPages={5} setPage={setPage} />);
    const nextButton = getByTestId('next-button');
    expect(nextButton).toBeDefined();

    fireEvent.press(nextButton);
    expect(setPage).toHaveBeenCalledWith(4);
  });

  it('move to last page', () => {
    const setPage = jest.fn();
    const { getByText } = render(<Pagination page={3} numberOfPages={100} setPage={setPage} />);
    const nextButton = getByText('100');
    expect(nextButton).toBeDefined();

    fireEvent.press(nextButton);
    expect(setPage).toHaveBeenCalledWith(100);
  });

  it('not change page in last and first page', () => {
    const setPage = jest.fn();
    const { getByText, getByTestId } = render(<Pagination numberOfPages={100} setPage={setPage} />);
    const previousButton = getByTestId('previous-button');
    const nextButton = getByTestId('next-button');
    const lastButton = getByText('100');
    
    fireEvent.press(previousButton);
    expect(setPage).not.toHaveBeenCalled();
    
    fireEvent.press(lastButton);
    fireEvent.press(nextButton);
    expect(setPage).toHaveBeenCalledTimes(1);
  });
});