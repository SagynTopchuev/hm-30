// import { Outlet } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { styled } from '@mui/material'
import { Header } from '../../components/header/Header'
import { Basket } from '../../components/basket/Basket'
import { MealLayout } from './MealLayout'

export const UserLayout = () => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev)
  }, [])

  return (
    <div>
      <Header toggleHandler={toggleHandler} />
      {toggle && <Basket onClose={toggleHandler} open={toggle} />}

      <Container>
        {/* <Outlet /> */}
        <MealLayout />
      </Container>
    </div>
  )
}

const Container = styled('div')`
  margin-top: 101px;
`
