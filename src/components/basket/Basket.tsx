import { Modal, Box } from '@mui/material'
import { styled } from '@mui/material'

import { BasketItem } from './BasketItem'
import { TotalAmount } from './TotalAmount'
import { Loading } from '../UI/Loading'

interface PropsBasket {
  onClose: () => void
  open: boolean
}

const items: IMeals[] = []

export const Basket = ({ onClose, open }: PropsBasket) => {
  const isLoading = false

  return (
    <>
      {isLoading && <Loading />}
      <Modal onClose={onClose} open={open}>
        <StyledModalContent>
          <Content>
            {items?.length ? (
              <FixedWidthContainer>
                {items.map((item) => {
                  return (
                    <BasketItem
                      key={item._id}
                      item={item}
                      // incrementFoodHandler={incrementFoodHandler}
                      // decrementFoodHandler={decrementFoodHandler}
                    />
                  )
                })}
              </FixedWidthContainer>
            ) : null}
            <TotalAmount toggleHandler={onClose} totalPrice={120} />
          </Content>
        </StyledModalContent>
      </Modal>
    </>
  )
}

const StyledModalContent = styled(Box)(() => ({
  '& ': {
    position: 'fixed',
    top: '26%',
    left: '28%',
    width: '44%',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '14px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    zIndex: '30',
    border: 'none',

    animation: 'slide-down 300ms ease-out forwards',

    '@keyframes slide-down': {
      from: {
        opacity: '0',
        transform: 'translateY(-4rem)',
      },
      to: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
}))

const Content = styled('div')(() => ({
  width: '100%',
  height: '100%',
  padding: '1.5rem 1rem',
}))

const FixedWidthContainer = styled('div')(() => ({
  overflowY: 'auto',
  maxHeight: '260px',
}))

// const { items, isLoading } = useSelector((state: RootState) => state.basket)
// const dispatch = useDispatch<AppDispatch>()

// const totalPrice = items?.reduce(
//   (prev, current) => prev + (current.price ?? 0) * (current.amount ?? 0),
//   0
// )

// const incrementFoodHandler = async (data: BasketType) => {
//   try {
//     const newData = { ...data, amount: data.amount + 1 }
//     await dispatch(putIncrementAmountFood(newData)).unwrap()

//     dispatch(ActionsTypeSnackbar.doSuccess())
//   } catch (error) {
//     if (error instanceof Error && error.message) {
//       dispatch(ActionsTypeSnackbar.doError(error.message))
//     } else {
//       dispatch(ActionsTypeSnackbar.doError('Something went wrong'))
//     }
//   }
// }

// const decrementFoodHandler = async (data: BasketType) => {
//   try {
//     const newData = { ...data, amount: data.amount - 1 }
//     if (data.amount !== 1) {
//       await dispatch(putDecrementAmountFood(newData)).unwrap()
//     } else {
//       await dispatch(deleteAmountFood(data)).unwrap()
//     }

//     dispatch(ActionsTypeSnackbar.doSuccess())
//   } catch (error) {
//     if (error instanceof Error && error.message) {
//       dispatch(ActionsTypeSnackbar.doError(error.message))
//     } else {
//       dispatch(ActionsTypeSnackbar.doError('Something went wrong'))
//     }
//   }
// }
