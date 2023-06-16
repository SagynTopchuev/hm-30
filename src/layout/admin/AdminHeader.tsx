import { Button, styled } from '@mui/material'

export const AdminHeader = () => {
  return (
    <HeaderStyle>
      <HeaderNavigation>
        <h1>Meals</h1>
        <Button variant="contained">Log Out</Button>
      </HeaderNavigation>
    </HeaderStyle>
  )
}

const HeaderStyle = styled('header')`
  position: fixed;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  padding: 22px 120px;
  color: #ffffff;
  top: 0;
  z-index: 998;
`

const HeaderNavigation = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style: none;
  font-size: 1.4rem;
`
