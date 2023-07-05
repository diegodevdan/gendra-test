import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import DropDown from '../../src/components/shared/DropDown';

describe('DropDown', () => {
  it('should render the title and icon', () => {
    const { getByText, getByTestId } = render(
      <DropDown title="Test" />,
    );

    expect(getByText('Test')).toBeDefined();
  });

  it('should toggle the content when pressed', () => {
    const { getByText, getByTestId } = render(
      <DropDown title="Test">
        <Text testID="content">Content</Text>
      </DropDown>,
    );

    const button = getByText('Test');
    const content = getByTestId('content');

    let styles = content.parent.parent.props.style.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    expect(styles).toMatchObject({ opacity: 0 });
    
    fireEvent.press(button);

    styles = content.parent.parent.props.style.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    expect(styles).toMatchObject({ opacity: 1 });
    
    fireEvent.press(button);

    styles = content.parent.parent.props.style.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    expect(styles).toMatchObject({ opacity: 0 });
  });
});