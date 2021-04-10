import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>
    <StyledContainer><StyledLink target="_blank" href='https://uedcpresale.unitedemiratecoin.net/How%20to%20participate%20in%20UEDC%20presale.pdf'>How To Participate</StyledLink></StyledContainer>
    <Footer />
  </StyledPage>
)

const StyledPage = styled.div`
  margin-top: 27px;
  padding-bottom: 56px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 32px;
`

const StyledContainer = styled.div`
  text-align: center;
`

const StyledLink = styled.a`
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  -webkit-flex: 1 1 0%;
  -ms-flex: 1 1 0%;
  flex: 1 1 0%;
  line-height: 15px;
  text-align: center;
  color: rgba(117,17,19,1);
  text-decoration: none;
`

const StyledMain = styled.div`

  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize * 2}px);
  // @media (max-height: 900px) {
  //   min-height: calc(100vh - ${(props) => props.theme.topBarSize * 3}px);
  // }
  // @media screen and (min-width: 901px) and (max-width:1024px) {
  //   min-height: calc(100vh - ${(props) => props.theme.topBarSize * 6}px);
  // }
`
export default Page
