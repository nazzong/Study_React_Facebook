import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import styled, { keyframes } from "styled-components";
import {
  InfoCircleOutlined,
  SwapOutlined,
  BookOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justfy-content: center;
  padding: 20px;
`;

const hoverAnimation = keyframes`
    0%{
        opacity : 1;
    } 50% {
        opacity : 0.3;
    } 100%{
        opacity : 1;
    }
`;

const MenuRow = styled(Row)`
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;

  box-sizing: border-box;
  font-size: 17px;

  cursor: pointer;
  transition: 0.4s;
`;

const IconCol = styled(Col)`
  margin-right: 5px;
  padding: 5px 10px;
  border-bottom: 0.5px solid #dedede;
`;

const ContentCol = styled(Col)`
  padding: 5px 10px;
  border-bottom: 0.5px solid #dedede;

  &:hover {
    animation: ${hoverAnimation} 0.4s forwards;
  }
`;

const MyMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return isLoggedIn ? (
    <MenuRow>
      <>
        <IconCol span={4}>
          <InfoCircleOutlined />
        </IconCol>
        <ContentCol span={18}> 내 정보 </ContentCol>
      </>

      <>
        <IconCol span={4}>
          <SwapOutlined />
        </IconCol>
        <ContentCol span={18}> 팔로우 &#38; 팔로잉 </ContentCol>
      </>

      <>
        <IconCol span={4}>
          <BookOutlined />
        </IconCol>
        <ContentCol span={18}> 컬렉션 </ContentCol>
      </>
    </MenuRow>
  ) : (
    <div>
      <Link href="/login">
        <Button type="primary">GO TO LOGIN</Button>
      </Link>
      <p></p>
    </div>
  );
};

export default MyMenu;
