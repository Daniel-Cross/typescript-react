import * as React from 'react';
import * as enzyme from 'enzyme';
import '../setupTest';
import Hello from './Hello';

describe('Hello component', () => {
  it('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
  });

  it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
  });

  it('renders the correct text with an explicit enthusiasm of 5', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
  });

  it('throws when enthusiasm level 0', () => {
    expect(() => {
      enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
    }).toThrow();
  });

  it('throws an error when enthusiasm is a negative number', () => {
    expect(() => {
      enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
    }).toThrow();
  });
});
