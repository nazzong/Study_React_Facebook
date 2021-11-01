import { Button } from "antd";
import styled from "styled-components";
import Theme from "./Theme";

export const WholeWrapper = styled.section`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};

  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bgColor};
  //position
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  //border

  z-index: ${(props) => props.zIndex};
  //background
  background-image: ${(props) => props.bgImg};
  background-repeat: no-repeat;
  background-size: ${(props) => props.bgSize || `cover`};
  background-position: ${(props) => props.bgPosition || `center`};

  transition: 0.2s;
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  text-align: ${(props) => props.textAlign};

  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || `1rem`};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bgColor};
  //position
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  //border
  border: ${(props) => props.border};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  box-shadow: ${(props) => props.shadow};

  z-index: ${(props) => props.zIndex};
  cursor: ${(props) => props.cursor};
  //background
  background-image: ${(props) => props.bgImg};
  background-repeat: no-repeat;
  background-size: ${(props) => props.bgSize || `cover`};
  background-position: ${(props) => props.bgPosition || `center`};

  transition: 0.2s;
`;

export const RsWrapper = styled.article`
  width: 1350px;
  height: ${(props) => props.height};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};

  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || `1rem`};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bgColor};
  //position
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  //border
  border: ${(props) => props.border};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  box-shadow: ${(props) => props.shadow};

  z-index: ${(props) => props.zIndex};
  cursor: ${(props) => props.cursor};
  //background
  background-image: ${(props) => props.bgImg};
  background-repeat: no-repeat;
  background-size: ${(props) => props.bgSize || `cover`};
  background-position: ${(props) => props.bgPosition || `center`};

  @media (max-width: 1500px) {
    width: 1350px;
  }
  @media (max-width: 1350px) {
    width: 1280px;
  }
  @media (max-width: 1280px) {
    width: 1100px;
  }
  @media (max-width: 1100px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const CommonButton = styled(Button)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize || `1rem`};
  color: ${(props) => props.color || Theme.white_C};
  background: ${(props) => props.bgColor || Theme.basicTheme_C};
  border: ${(props) => props.border};
  box-shadow: ${(props) => props.shadow};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.bgColor || Theme.subTheme_C};
    color: ${(props) => props.color || Theme.white_C};
  }
`;

export const Image = styled.img`
  display: ${(props) => props.display};
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `auto`};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
  transform: ${(props) => props.transform};
  object-fit: ${(props) => props.objectFit || `cover`};
  position: ${(props) => props.position};
  box-shadow: ${(props) => props.shadow};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
`;
