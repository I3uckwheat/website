import React from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-static';
import { MarketHeader, MarketText, SectionWrapper } from '@src/Styles';
import { device, size } from '@src/breakpoints';
import mobile from '@images/about/mobile.svg';
import protocol from '@images/about/protocol.svg';

const IllustrationContainer = styled.div`
  background-color: #00e2c1;
  padding: 100px;
  text-align: center;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 50px;
    margin: 40px 0px;
  }

  img {
    @media ${device.mobileS} and (max-width: ${size.tablet}) {
      width: 40%;
    }

    @media ${device.tablet} and (max-width: ${size.laptop}) {
      width: 80%;
    }

    @media ${device.desktopS} {
      width: 70%;
    }
  }
`;

const TextWrapper = styled.div`
  padding: 20px;

  @media ${device.tablet} and (max-width: ${size.laptopL}) {
    padding: 0 40px;
  }

  @media ${device.laptopL} {
    padding: 0 80px;
  }
`;

export const ButtonWrapper = styled(Button)`
  margin-top: 20px;
  margin-right: 20px;
  width: 80%;

  @media ${device.mobileS} and (max-width: ${size.laptop}) {
    width: 100%;
  }
`;

const OpenSourceText = MarketText.extend`
  margin: 45px 0px;

  @media ${device.mobileL} and (max-width: ${size.laptop}) {
    margin: 10px 0px;
  }
`;

class Opensource extends React.Component {
  render() {
    return (
      <SectionWrapper style={{ background: '#f0f0f0' }}>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <IllustrationContainer>
              <img
                alt="Open Source Derivatives Protocol"
                src={protocol}
                width="70%"
              />
            </IllustrationContainer>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <TextWrapper>
              <MarketHeader>
                We love open source! Contribute to our project!
              </MarketHeader>
              <OpenSourceText>
                Come join the development community that is building MARKET
                Protocol
              </OpenSourceText>
              <ButtonWrapper type="primary" style={{ padding: '0 5%' }}>
                <Link
                  to="https://github.com/MARKETProtocol"
                  target="_blank"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Contribution Guide
                </Link>
              </ButtonWrapper>
              <ButtonWrapper type="primary" style={{ padding: '0 7.5%' }}>
                <Link
                  to="/team"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Check out open issues on Github
                </Link>
              </ButtonWrapper>
            </TextWrapper>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 12, push: 12 }}
            lg={{ span: 12, push: 12 }}
            xl={{ span: 12, push: 12 }}
          >
            <IllustrationContainer>
              <img alt="mobile" src={mobile} width="50%" />
            </IllustrationContainer>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 12, pull: 12 }}
            lg={{ span: 12, pull: 12 }}
            xl={{ span: 12, pull: 12 }}
          >
            <TextWrapper>
              <MarketHeader>Engineering Weekly</MarketHeader>
              <MarketText style={{ margin: '45px 0px' }}>
                Dont forget to join us for Engineering Weekly, our technical
                community call that is open to everyone!
              </MarketText>
              <p style={{ fontSize: '24px', fontWeight: '500' }}>
                Every Thurdsay 8AM MT
              </p>
            </TextWrapper>
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}

export default Opensource;
