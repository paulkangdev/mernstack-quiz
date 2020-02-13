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
  background: royalblue;
  border-radius: 10px;
  box-sizing: border-box;
  position: absolute;
    top: 25%;
    left: 25%;
  margin: 0 auto;
  
  min-height: 70vh;
  padding: 1rem;
  width: 50vw;
  button {
        background: white;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
    }
    button:hover {
        background: whitesmoke;
        cursor: pointer;
    }
    button:active {
        background: black;
  }
`;
