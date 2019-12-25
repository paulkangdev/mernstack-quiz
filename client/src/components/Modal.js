import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from './Portal';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
          {on && (
            <>
                <ModalWrapper>
                  <button onClick={toggle}>Close</button>
                  {children}
                </ModalWrapper>
            </>
          )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  min-height: 50%;
  padding: 2rem;
  width: 50%;
  background: gray;
`;
