import React, { Component } from 'react';

import Portal from './Portal';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
          {on && (
            <>
                
                <div className="modal-body"><button onClick={toggle}>Close</button>
                {children}</div>
            </>
          )}
      </Portal>
    );
  }
}

// const ModalWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: teal;
// `;
