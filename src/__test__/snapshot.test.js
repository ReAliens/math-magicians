import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import Quotes from '../components/Quotes';

describe('Tests snapshots of components', () => {
  it('Renders Quotes Correctly', () => {
    const QuoteUI = renderer.create(<Quotes />).toJSON();
    expect(QuoteUI).toMatchSnapshot();
  });

  it('Renders Home Correctly', () => {
    const HomeUI = renderer.create(<Home />).toJSON();
    expect(HomeUI).toMatchSnapshot();
  });

  it('Renders Calculator Correctly', () => {
    const CaluclatorUI = renderer.create(<Calculator />).toJSON();
    expect(CaluclatorUI).toMatchSnapshot();
  });
});
