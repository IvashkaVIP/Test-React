import { Component } from "react"
import { Modal } from "./Modal/Modal";

export class App extends Component {
  render () {
  return(
    <div
      className="container"
      style={{
        padding: '33px',
      }}
    >
      <Modal />

      {/* <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div> */}
    </div>
  );
};};
