import { styled, Fab } from '@mui/material'
import { AdminHeader } from './AdminHeader'
import { AdminTable } from './AdminTable'
import AddIcon from '@mui/icons-material/Add'

export const AdminLayout = () => {
  return (
    <>
      <AdminHeader />

      <main style={{ marginTop: '120px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AdminTable />
        </div>
        <AddContainer>
          <ContainerIcon
            // onClick={() => openModalHandler('add)}
            color="primary"
            aria-label="add"
          >
            <AddIcon sx={{ fontSize: '50px' }} />
          </ContainerIcon>
        </AddContainer>
      </main>
    </>
  )
}

const ContainerIcon = styled(Fab)`
  color: #fff;
  width: 76px;
  height: 76px;
  background-color: #8a2b06;

  &:hover {
    background-color: #a83508;
  }
`

const AddContainer = styled('div')`
  position: fixed;
  top: 84%;
  left: 48%;
  z-index: 100;
  animation: pulse 3s linear infinite;
  border-radius: 50%;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(138, 43, 6, 0.427),
        0 0 0 0 rgba(138, 43, 6, 0.604);
    }
    40% {
      box-shadow: 0 0 0 50px rgba(38, 186, 48, 0),
        0 0 0 0 rgba(138, 43, 6, 0.423);
    }
    80% {
      box-shadow: 0 0 0 50px rgba(23, 181, 81, 0),
        0 0 0 30px rgba(9, 210, 42, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(3, 178, 17, 0), 0 0 0 30px rgba(2, 197, 61, 0);
    }
  }
`
