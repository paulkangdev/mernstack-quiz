import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

export default class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement('div');
    this.el.setAttribute('id', 'portal-child');
  };

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;
    console.log("Portal render");
    return ReactDOM.createPortal(children, this.el);
  }
}
