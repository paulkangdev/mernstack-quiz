import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from './Portal';

export default class Modal extends Component {

  handleClose = () => {
    this.props.toggle();
    this.props.updateCurrentQuiz('');
  }

  render() {
    const { children, on } = this.props;
    return (
      <Portal>
          {on && (
            <>
                <ModalWrapper>
                  <button onClick={this.handleClose}>Close</button>
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
