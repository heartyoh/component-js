export class CommandReducer {
  static createReducer(model) {
    return new CommandReducer(model);
  }

  constructor(model) {
    this._model = model;

    this._action_map = new Map();
  }

  dispose() {}

  register(action) {
    if(!action.type)
      return;

    let action_set = this._action_map.get(action.type);
    if(action_set == null) {
      action_set = new Set();
      this._action_map.set(action.type, action_set)
    }

    action_set.add(action);

    return {
      unregister : () => this.unregister(action)
    }
  }

  unregister(action) {
    let action_set = this._action_map.get(action.type);
    if(!action_set)
      return;

    action_set.delete(action);
  }

  dispatch(command) {
    if(!command.type)
      return;

    let action_set = this._action_map.get(command.type);
    action_set.forEach(action => {
      action.handler(this._model, command);
    });
  }
}
