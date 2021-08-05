import React from "react";
import { Typography, Divider } from 'antd';
import { SmileTwoTone } from "@ant-design/icons";

const { Text } = Typography;

interface Props {
  data: string;
}

//Component for individual joke display

export const Joke: React.FC<Props> = ({ data }) => {
  return (
    <div className="listing">
      <SmileTwoTone className="icons" /> <Text>{data}</Text>
      <Divider />
    </div>
  );
};