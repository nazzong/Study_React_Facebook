import React, { useCallback } from "react";
import { Row, Col, Input, Button } from "antd";
import styled from "styled-components";
import Link from "next/link";

const HeaderRow = styled(Row)`
  height: 50px;
  color: #ffffff;
  background-color: #202020;
`;

const HeaderCol = styled(Col)`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AppHeader = () => {
  const onSearch = useCallback((value) => {
    console.log(value);
  });

  const RightCol = styled(Col)`
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  return (
    <HeaderRow>
      <Col xs={4} sm={8}></Col>
      <HeaderCol xs={16} sm={8}>
        <Input.Search placeholder="Search..." onSearch={onSearch} enterButton />
      </HeaderCol>
      <RightCol xs={4} sm={8}>
        <Link href="/login">
          <Button shape="round" size="small">
            Login
          </Button>
        </Link>
      </RightCol>
    </HeaderRow>
  );
};

export default AppHeader;
