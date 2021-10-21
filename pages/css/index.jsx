import React from "react";
import styled from "styled-components";
import {
  RsWrapper,
  WholeWrapper,
  Wrapper,
  CommonButton,
} from "../../components/commonComponents";
import Theme from "../../components/Theme";

const Title = styled.h1`
  font-size: 4.5rem;
  color: ${(props) => props.color || Theme.white_C};
  line-height: 0.7;
`;

const Desc = styled.p`
  color: ${Theme.white_C};
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.3;
`;

const CommonTitle = styled.h2`
  font-size: 3rem;
  position: relative;
  margin: 80px 0 80px;

  &:before {
    content: "";
    width: 5px;
    height: 130px;
    background: ${Theme.basicTheme_C};
    position: absolute;
    top: -130px;
    left: 50%;
    margin-left: -2.5px;
  }
`;

const Css = () => {
  return (
    <WholeWrapper>
      <Wrapper
        height={`100vh`}
        bgImg={`url("https://4leaf-bird-s3.s3.ap-northeast-2.amazonaws.com/thumb/image1.png")`}
      >
        <Title>Welcome to Mountain</Title>
        <Title>Expeditions Club!</Title>

        <Desc color={Theme.white_C}>
          Overseas Expeditions, UK Mountain Challenges
        </Desc>
        <Desc color={Theme.white_C}>Private Guiding &#38; Instruction</Desc>
      </Wrapper>

      <Wrapper padding={`0 0 80px`}>
        <CommonTitle>About Us</CommonTitle>
        <RsWrapper>
          <Wrapper dr={`row`} al={`flex-start`}>
            <Wrapper width={`50%`} padding={`15px`}>
              <Wrapper margin={`0 0 20px`} fontSize={`1.3rem`}>
                Mountain Expeditions is a small UK company owned and run by Jon
                Gupta. We specialise in bespoke, professional and seamlessly-run
                expeditions around the world.
              </Wrapper>
              <Wrapper fontSize={`1.3rem`}>
                A successful expedition is made up of the hundreds of small
                wonderful experiences gained from start to finish. We therefore
                ensure that every aspect of your trip is expertly organised and
                well-managed.
              </Wrapper>
            </Wrapper>
            <Wrapper width={`50%`} al={`flex-start`} padding={`15px`}>
              <Wrapper margin={`0 0 20px`} fontSize={`1.3rem`}>
                We operate in 6 countries. We respect and value the local
                communities with whom we work and have nurtured and built strong
                relationships with them. As a result, we feel we have a deeper
                understanding of how to best deliver the trip of a lifetime to
                you.
              </Wrapper>
              <CommonButton width={`155px`} height={`45px`}>
                Read more
              </CommonButton>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        height={`100vh`}
        bgImg={`url("https://4leaf-bird-s3.s3.ap-northeast-2.amazonaws.com/thumb/image2.png")`}
      >
        <Title color={Theme.black_C}>Expedition leaders</Title>
        <RsWrapper>
          <Wrapper padding={`0 100px`} textAlign={`center`} fontSize={`1.2rem`}>
            From time to time Mountain Expeditions uses a number of carefully
            and personally selected associate Mountain Leaders (MLs),
            Mountaineering Instructors (MIA/MICs) and Mountain Guides (UIAGM) to
            deliver expeditions, instuction and guiding.All of these people are
            chosen on their individual merits based on the mix of their
            technical skills, qualifications and excellent interpersonal skills.
            These guides are both friends as well as colleagues and understand
            the Mountain Expeditions ethos and deliver to the highest standards.
          </Wrapper>
        </RsWrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default Css;
