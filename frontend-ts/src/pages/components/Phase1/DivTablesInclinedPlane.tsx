import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import { createReadStream  } from 'fs';

interface Column {
    id: 'angulo' | 'inclinacao' | 'jan' | 'fev'  | 'mar'  | 'abr'  | 'mai' |  'jun' | 'jul' | 'ago'  | 'set' | 'out'  | 'nov'  | 'dez';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }
  
  const columns: readonly Column[] = [
    { id: 'angulo', label: 'Angulo', minWidth: 100 },
    { id: 'inclinacao', label: 'Inclinação', minWidth: 100 },
    {id: 'jan', label: 'Jan', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'fev', label: 'Fev', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'mar', label: 'Mar', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'abr', label: 'Abr', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'mai', label: 'Mai', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'jun', label: 'Jun', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'jul', label: 'Jul', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'ago', label: 'Ago', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'set', label: 'Set', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'out', label: 'Out', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'nov', label: 'Nov', align: 'right', format: (value: number) => value.toLocaleString('en-US')},
    {id: 'dez', label: 'Dez', align: 'right', format: (value: number) => value.toLocaleString('en-US')},

  ];
  
  interface Data {
    angulo: string;
    inclinacao: string;
    jan : number;
    fev : number;
    mar : number;
    abr : number;
    mai : number;
    jun : number;
    jul : number;
    ago : number;
    set : number;
    out : number;
    nov : number;
    dez : number;
  }
  
  function createData(
    angulo: string,
    inclinacao: string,
    jan: number,
    fev: number,
    mar: number,
    abr: number,
    mai: number,
    jun: number,
    jul: number,
    ago: number,
    set: number,
    out: number,
    nov: number,
    dez: number    
  ): Data {
    return { angulo, inclinacao, jan ,fev ,mar ,abr ,mai ,jun ,jul ,ago ,set ,out ,nov ,dez };
  }

  const rows = [
    createData('teste1', 'teste2', 1.0, 2.0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12), 
  ]

  function DivTablesInfos() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.angulo}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    )
  }

  
export default DivTablesInfos

