export class Component {
  constructor(props) {
    this._props = props;

    this._container = null;
  }

  dispose() {
    if(this._container)
      this._container.remove(this);
  }

  get props() {
    return this._props;
  }

  get container() {
    return this._container;
  }

  set container(container) {
    this._container = container;
  }
}
