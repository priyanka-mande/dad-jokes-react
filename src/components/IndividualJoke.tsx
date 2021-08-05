import React from "react";
import { JokeText } from "../app.types";
import { Typography, Divider } from "antd";
import { SmileTwoTone } from "@ant-design/icons";

const { Text } = Typography;

//Component for individual joke display

export const IndividualJoke: React.FC<JokeText> = ({ data }) => {
  return (
    <div className="listing">
      <SmileTwoTone className="icons" /> <Text>{data}</Text>
      <Divider />
    </div>
  );
};
