import React from "react"
import styled from "styled-components"
import { mq } from "../../utils/mediaQueries"

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

const Layout = styled.div`
  height: 60px;
  width: 100%;
  height: 100px;
  padding: 6px 0px;
  text-align: center;
  ${mq(`mediumUp`)} {
    padding: 6px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Logo = styled.p`
  font-size: 26px;
  flex-grow: 0;
  color: ${({ theme }) => theme.colors.easternBlue};
  ${mq(`mediumUp`)} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const UserAction = styled.div`
  display: flex;
  justify-content: center;
`

const UserEmail = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
`

const LogOutButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.easternBlue};
  margin-left: 10px;
  border: none;
  padding: 10px;
  border-radius: 2px;
  font-size: 16px;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const Header = ({ signOut, user }) => {
  return (
    <Layout>
      <Logo>Red Bull Pixabay App</Logo>
      <UserAction>
        <UserEmail>{user.attributes.email}</UserEmail>
        <LogOutButton onClick={signOut}>Logout</LogOutButton>
      </UserAction>
    </Layout>
  )
}

export default Header
