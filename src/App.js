import React, {Component} from "react";
import styled from "styled-components";

import Runner from "./modules/runner/components/Runner";

import uuid from "./utils/uuid";

import tests from "./data";

const Container = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 6px;
`;

class App extends Component {
  state = {
    tests: tests.map(({run, ...test}) => {
      const id = uuid();

      return {
        ...test,
        id,
        status: "init",
        run: () => {
          this.updateStatus(id, "running");
          run(passed => this.updateStatus(id, passed ? "passed" : "failed"));
        },
      };
    }),
  };

  updateStatus = (id, status) =>
    this.setState(({tests}) => ({
      tests: tests.map(test => (test.id === id ? {...test, status} : test)),
    }));

  render() {
    const {tests} = this.state;

    return (
      <Container>
        <h1>Test runner</h1>
        <Runner tests={tests} />
      </Container>
    );
  }
}

export default App;
