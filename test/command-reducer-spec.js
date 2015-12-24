import { CommandReducer } from '../src/command-reducer'

describe('CommandReducer', function() {

  var reducer;

  before(function() {
    reducer = CommandReducer.createReducer('TEST_MODEL');
  });

  after(function() {
    reducer.dispose();
  });

  describe('#static createReducer()', function() {
    it('', function() {
      reducer.should.not.be.null;
    });
  });

  describe('#register()', function() {
    context('커맨드액션이 유효한 경우', function() {
      it('커맨드 액션 등록을 해제할 수 있는 대리객체가 반환된다.', function() {
        var handler = reducer.register({
          type: 'TEST_ACTION'
        });

        handler.should.not.be.null;

        handler.unregister();
      });
    });

    context('커맨드액션이 유효하지 않은 경우', function() {
      it('undefined가 반환된다.', function() {
        var handler = reducer.register({});

        require('should').not.exist(handler);
      });
    });
  });

  describe('#dispatch()', function() {

    var handler;

    before(function() {
      handler = reducer.register({
        type: 'TEST',
        handler: (model, action) => console.log(model)
      });
    });

    after(function() {
      handler.unregister();
    });

    it('커맨드가 디스패치되어야 한다.', function() {
      reducer.dispatch({
        type: 'TEST'
      })
    });
  });
});
