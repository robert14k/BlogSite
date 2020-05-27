import React from "react";
import { Row, Col, Button } from "antd";

const NotFound = () => {
  return (
    <div style={{ backgroundColor: "#c7dff2", height: "100vh" }}>
      {/* [horizontal padding, vertical] */}
      <Row style={{ padding: 20}}/>
      <Row>
        <Col span={8} />
        <Col span={8} style={{ width: "100%", textAlign: "center" }}>
          <Row>
            <h2 style={{ margin: "auto", fontSize: "x-large"}}>Not Found</h2>
          </Row>
          <Row>
            <p style={{ margin: "auto", fontSize: "large"}}>The page you're looking for does not exists.</p>
          </Row>
          <Row style={{padding: 5}}>
            <Button size={"large"} style={{ margin: "auto"}}
              // eslint-disable-next-line
              href="javascript:history.back()"
            >
              Go back?
            </Button>
          </Row>
        </Col>
        <Col span={8} />
      </Row>
    </div>
  );
};

export default NotFound;
