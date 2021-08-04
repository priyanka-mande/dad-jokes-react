import React, { useState } from "react";
import { Typography } from 'antd';
import { SmileTwoTone } from "@ant-design/icons";

const { Text } = Typography;

interface Props {
  data: string;
}

export const Joke: React.FC<Props> = ({ data }) => {
  return (
    <div className="listing">
      <br />
      <SmileTwoTone className="icons" /> <Text>{data}</Text> 
    </div>
  );
};