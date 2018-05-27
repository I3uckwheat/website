import React from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-static';

import { MarketHeader, MarketText, SectionWrapper } from '@src/Styles';
import Protocol from '@images/protocol_illustration.svg';
import { device, size } from '@src/breakpoints';

export const TextWrapper = styled.div`
  padding: 0px 10px;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 30px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 30px;
  }

  @media ${device.laptop} {
    padding: 0 50px 0 50px;
  }
`;

export const IllustrationWrapper = styled.div`
  background: #181E26
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 70px
  
  img {
    @media ${device.desktopS} {
      width: 40%
    }
  }
`;

export const ButtonWrapper = styled(Button)`
  margin-top: 20px;
  margin-right: 20px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    width: 100%;
  }
`;

const BuildDappWrapper = SectionWrapper.extend`
  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 30px;
  }
`;

class BuildDapp extends React.Component {
  render() {
    return (
      <BuildDappWrapper>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <IllustrationWrapper>
              <img
                alt="build dApp ethereum trading"
                src={Protocol}
                width="50%"
                style={{ margin: '0 auto' }}
              />
            </IllustrationWrapper>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <TextWrapper>
              <MarketHeader>Build your dApp on MARKET Protocol</MarketHeader>
              <MarketText style={{ margin: '20px 0' }}>
                As a protocol, MARKET enables third parties to build
                applications for trading, order routing and related activities.
                The protocol is open source and available under the Apache 2.0
                license.
              </MarketText>
              <ButtonWrapper type="primary" style={{ padding: '0 5%' }}>
                <Link
                  to="https://github.com/MARKETProtocol"
                  target="_blank"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Check us out on Github
                </Link>
              </ButtonWrapper>
              <ButtonWrapper type="primary" style={{ padding: '0 7.5%' }}>
                <Link
                  to="/partners"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Learn more about our partners
                </Link>
              </ButtonWrapper>
            </TextWrapper>
          </Col>
        </Row>
      </BuildDappWrapper>
    );
  }
}
export default BuildDapp;
