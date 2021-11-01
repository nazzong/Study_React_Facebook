import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import {
  RsWrapper,
  WholeWrapper,
  Wrapper,
  CommonButton,
  Image,
} from "../../components/commonComponents";
import Theme from "../../components/Theme";
import useWidth from "../../components/useWidth";

const Title = styled.h1`
  font-size: 4.5rem;
  color: ${(props) => props.color || Theme.white_C};
  line-height: 0.7;

  @media (max-width: 900px) {
    font-size: 3rem;
  }

  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  color: ${Theme.white_C};
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.3;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
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

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

const Css = () => {
  const width = useWidth();
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
            <Wrapper width={width < 900 ? `100%` : `50%`} padding={`15px`}>
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
            <Wrapper
              width={width < 900 ? `100%` : `50%`}
              al={`flex-start`}
              padding={`15px`}
            >
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
          <Wrapper
            padding={width < 900 ? `0` : `0 100px`}
            textAlign={`center`}
            fontSize={`1.2rem`}
          >
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

      <Wrapper
        padding={`0 0 150px`}
        bgImg={`url("https://4leaf-bird-s3.s3.ap-northeast-2.amazonaws.com/thumb/image3.png")`}
      >
        <RsWrapper>
          <Wrapper
            dr={`row`}
            margin={`-102px 0 0`}
            al={`flex-start`}
            color={Theme.white_C}
          >
            <Wrapper
              width={width < 900 ? `100%` : `calc(100% / 3)`}
              padding={`7px`}
            >
              <Image
                alt="Image"
                height={width < 900 ? (width < 700 ? `341` : `686px`) : `436px`}
                src={`https://4leaf-bird-s3.s3.ap-northeast-2.amazonaws.com/thumb/image1.png`}
              />
              <Wrapper al={`flex-start`} padding={`60px 20px 0`}>
                <Wrapper width={`auto`} fontSize={`1.875rem`}>
                  title
                </Wrapper>
                <Wrapper fontSize={`0.875rem`} margin={`15px 0`}>
                  (my full write up from 2017) ‘Cold, remote &#38; desolate. If
                  at first you don’t succeed…’ Extract from my 2016 attempt: It
                  was 04:00am and I needed to stop. I was hurting so much.
                </Wrapper>
                <CommonButton>Read me</CommonButton>
              </Wrapper>
            </Wrapper>
            <Wrapper
              width={width < 900 ? `100%` : `calc(100% / 3)`}
              padding={`7px`}
              margin={width < 900 ? `50px 0` : `95px 0 0`}
            >
              <Image
                alt="Image"
                height={width < 900 ? (width < 700 ? `341` : `686px`) : `436px`}
                src={`https://4leaf-bird-s3.s3.ap-northeast-2.amazonaws.com/thumb/image1.png`}
              />
              <Wrapper al={`flex-start`} padding={`60px 20px 0`}>
                <Wrapper width={`auto`} fontSize={`1.875rem`}>
                  title
                </Wrapper>
                <Wrapper fontSize={`0.875rem`} margin={`15px 0`}>
                  (my full write up from 2017) ‘Cold, remote &#38; desolate. If
                  at first you don’t succeed…’ Extract from my 2016 attempt: It
                  was 04:00am and I needed to stop. I was hurting so much.
                </Wrapper>
                <CommonButton>Read me</CommonButton>
              </Wrapper>
            </Wrapper>
            <Wrapper
              width={width < 900 ? `100%` : `calc(100% / 3)`}
              padding={`7px`}
            >
              <Image
                alt="Image"
                height={width < 900 ? (width < 700 ? `341` : `686px`) : `436px`}
                src={`https://4leaf-bird-s3.s3.ap-northeast-2.amazonaws.com/thumb/image1.png`}
              />
              <Wrapper al={`flex-start`} padding={`60px 20px 0`}>
                <Wrapper width={`auto`} fontSize={`1.875rem`}>
                  title
                </Wrapper>
                <Wrapper fontSize={`0.875rem`} margin={`15px 0`}>
                  (my full write up from 2017) ‘Cold, remote &#38; desolate. If
                  at first you don’t succeed…’ Extract from my 2016 attempt: It
                  was 04:00am and I needed to stop. I was hurting so much.
                </Wrapper>
                <CommonButton>Read me</CommonButton>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
      <Wrapper
        padding={`100px 0`}
        bgImg={`url("https://4leaf-bird-s3.s3.ap-northeast-2.amazonaws.com/thumb/image4.png")`}
      >
        <RsWrapper>
          <Wrapper
            width={width < 900 ? `100%` : `80%`}
            bgColor={`rgba(0, 0,0, 0.4)`}
            color={Theme.white_C}
            padding={`50px 20px`}
          >
            <Wrapper fontSize={width < 700 ? `2rem` : `3rem`}>
              Our Leaders
            </Wrapper>
            <Wrapper
              textAlign={`center`}
              fontSize={width < 700 ? `1rem` : `1.2rem`}
              margin={`15px 0 10px`}
            >
              On every expedition, the number of participants is kept to a level
              to enable the highest quality to be maintained. We do not want to
              be that company where you become a number or even a blur after the
              expedition has finished, so we have a strict cut off point to
              ensure that our groups never become too big.
            </Wrapper>
            <Wrapper
              textAlign={`center`}
              fontSize={width < 700 ? `1rem` : `1.2rem`}
            >
              We strongly believe that by doing this our Mountain Expeditions
              Leaders are able to provide a more personalised service and we
              find that group dynamics work much better than when travelling in
              high numbers. Therefore, your success rate and enjoyment increases
              immeasurably.
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default Css;
