import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  styled,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { rows } from '../../common/utils/constants'
import { useClientSidePagination } from '../../hooks/useClientSidePagination'

const columns: IColumnTable[] = [
  {
    header: '№',
    key: '_id',
    index: true,
  },
  {
    header: 'Title',
    key: 'title',
  },
  {
    header: 'Description',
    key: 'description',
    fontWeight: 400,
  },
  {
    header: 'Price',
    key: 'price',
    color: '#ad5502',
    number: true,
    fontWeight: 600,
  },
  {
    header: 'Actions',
    key: 'actions',
    render: (meal) => {
      return (
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton>
            {/* onClick={() => {}} */}
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Grid>
      )
    },
  },
]

export const AdminTable = () => {
  const {
    styleBodyMeals,
    styleHeaderMeals,
    resultAdminMeals,
    paginate,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useClientSidePagination()

  const id = (id: IRowsTable) => {
    return id._id
  }

  const withPagination = true

  return (
    <Container>
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: '10px' }}>
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={() => styleHeaderMeals(column)}
                    key={column.key}
                    align="center"
                  >
                    {column.header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginate(rows).map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={id(row)}>
                    {columns.map((column) => {
                      if (column.render) {
                        return (
                          <TableCell key={column.key}>
                            {column.render(row)}
                          </TableCell>
                        )
                      }

                      return (
                        <TableCell
                          key={column.key}
                          align="center"
                          sx={() => styleBodyMeals(column)}
                        >
                          {resultAdminMeals(column, rowIndex, row)}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {withPagination && (
          <TablePagination
            rowsPerPageOptions={[8, 12, 100]}
            sx={{ fontSize: '1.2rem' }}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, newPage) => handleChangePage(newPage)}
            onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
          />
        )}
      </Paper>
    </Container>
  )
}

const Container = styled('div')`
  width: 90%;
  margin-top: 40px;
`
