import React from "react";
import { Card, Avatar, Image } from "antd";
import {
  EditOutlined,
  HeartOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const FeedCard = styled(Card)`
  width: 350px;
  margin-bottom: 100px;
  box-shadow: 2px 2px 12px #ffccff;

  @media only screen and (min-width: 576px) {
    width: 550px;
  }
`;

const FeedImage = styled(Image)`
  width: 100%;
  height: 380px;
  object-fit: cover;

  @media only screen and (min-width: 576px) {
    height: 597px;
  }
`;

const FeedBox = () => {
  return (
    <FeedCard
      cover={
        <FeedImage
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <CommentOutlined key="setting" />,
        <HeartOutlined key="edit" />,
        <EditOutlined key="ellipsis" />,
      ]}
    >
      <FeedCard.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
      />
    </FeedCard>
  );
};

export default FeedBox;
