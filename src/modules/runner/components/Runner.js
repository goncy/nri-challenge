import React, {Fragment} from "react";
import styled from "styled-components";

import StatusIcon from "../../../ui/feedback/StatusIcon";
import Button from "../../../ui/controls/Button";

import {partition} from "../../../utils/array";

const Row = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  .description {
    margin-left: 8px;
  }
`;

const Count = styled(Row)`
  justify-content: space-around;
  margin: 24px 0;
`;

const STATUSES = {
  init: "default",
  running: "info",
  passed: "success",
  failed: "error",
};

const Runner = ({tests}) => {
  const partitioned = partition("status", tests);
  const {init, running, passed, failed} = partitioned;
  const completed = tests.length > 0 && !init && !running;

  return (
    <Fragment>
      {[init || [], running || [], passed || [], failed || []]
        .flat()
        .map(({status, description}, index) => (
          <Row key={index}>
            <StatusIcon status={STATUSES[status]} />
            <span className="description">{description}</span>
          </Row>
        ))}
      <Count>
        {Object.keys(STATUSES).map(status => (
          <Row key={status}>
            <StatusIcon status={STATUSES[status]} />
            <span className="description">
              {(partitioned[status] || []).length}
            </span>
          </Row>
        ))}
      </Count>
      {!running && (
        <Button onClick={() => tests.map(test => test.run())}>
          {completed ? "Run again" : "Run tests"}
        </Button>
      )}
    </Fragment>
  );
};

export default Runner;
