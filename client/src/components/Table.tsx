import { TableRow, TableHead, TableContainer, Paper, Table, TableBody, TableCell } from '@mui/material';

const CustomTable = (props: any) => {
    const { rows, columns } = props;

    return (
        <div className='flex justify-center w-full max-w-5xl'>
            <TableContainer className='w-full max-w-5xl rounded-lg overflow-hidden shadow-lg' component={Paper}>
                <Table aria-label="sticky table">
                    <TableHead className='bg-gray-900 text-white'>
                        <TableRow>
                            {columns?.map((column: any) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{ color: 'white' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.length ? rows.map((row: any) => {
                            return (
                                <TableRow tabIndex={-1} key={row.code}>
                                    {columns?.map((column: any) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format
                                                    ? column.format(row, column)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        }) : <TableRow>
                            <TableCell>
                                Not Found.
                            </TableCell>
                        </TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CustomTable