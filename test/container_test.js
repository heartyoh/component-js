import { Component } from '../src/component'
import { Container } from '../src/container'

describe('Container', function() {
  describe('#constructor()', function() {
    it('생성시점의 컨테이너의 size는 0 이다.', function() {

      let container = new Container({});

      container.size.should.equal(0);
    });
  });
  describe('#dispose()', function() {
    it('컨테이너가 파괴될 때는 자식 컴포넌트들을 모두 파괴한다.', function() {

      let component1 = new Component({});
      let component2 = new Component({});

      let container = new Container({});

      container.add(component1);
      container.add(component2);

      container.dispose();

      container.size.should.equal(0);
    });
  });
  describe('#add()', function() {
    context('새로운 컴포넌트가 추가되는 경우', function() {
      it('컨테이너의 size가 하나 커져야한다.', function() {

        let component1 = new Component({});
        let component2 = new Component({});

        let container = new Container({});

        container.add(component1);

        let size = container.size;

        container.add(component2);

        container.size.should.equal(size + 1);
      });
    });
    context('이미 존재하는 컴포넌트가 추가되는 경우', function() {
      it('컨테이너의 size는 변하지 않아야 한다.', function() {

        let component1 = new Component({});
        let component2 = new Component({});

        let container = new Container({});

        container.add(component1);
        container.add(component2);

        let size = container.size;

        container.add(component1);

        container.size.should.equal(size);
      });
    });
  });
  describe('#remove()', function() {
    context('컨테이너가 가지고 있는 컴포넌트를 제거하는 경우', function() {
      it('컨테이너의 size가 하나 작아져야 한다.', function() {

        let component1 = new Component({});
        let component2 = new Component({});

        let container = new Container({});

        container.add(component1);
        container.add(component2);

        let size = container.size;

        container.remove(component2);

        container.size.should.equal(size - 1);
      });
    });
    context('컨테이너가 가지고 있지 않는 컴포넌트를 제거하는 경우', function() {
      it('컨테이너의 size는 변하지 않아야 한다.', function() {

        let component1 = new Component({});
        let component2 = new Component({});

        let container = new Container({});

        container.add(component1);
        container.add(component2);

        let size = container.size;

        container.remove(new Component({}));

        container.size.should.equal(size);
      });
    });
  });
});
