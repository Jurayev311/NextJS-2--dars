import React from "react";
import { Flex, Spin } from "antd";

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const App = () => (
  <div className="h-screen flex items-center justify-center">
    <Flex className="w-full h-full" align="center" justify="center">
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    </Flex>
  </div>
);

export default App;
