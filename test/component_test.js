import { Component } from '../src/component'

describe('Component', () => {
  describe('#get props()', () => {
    it('생성될 때 넣었던 객체를 반환해야 한다.', () => {
      let a = 'A';
      let props = { a };
      let component = new Component(props);

      component.props.should.equal(props);
    });
  });
});
