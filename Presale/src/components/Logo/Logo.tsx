import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import chef from '../../assets/img/icon.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={chef} width="50" alt='logo' style={{ marginTop: 0, marginRight: 10 }} />
      <h4>UEDC Presale</h4>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

export default Logo
