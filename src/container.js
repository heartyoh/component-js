import { Component } from './component'

export class Container extends Component {
  constructor(props) {
    super(props);

    this._components = new Set();
  }

  dispose() {
    super.dispose();

    this._components.forEach(component => component.dispose());
  }

  add(component) {
    this._components.add(component);
    component.container = this;
  }

  remove(component) {
    this._components.delete(component);
    component.container = null;
  }

  get size() {
    return this._components.size;
  }

}
