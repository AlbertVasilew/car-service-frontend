import { useEffect, useState } from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import employeesData from '../fake-data-entries/employees';

const EmployeePage = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // API call to retrieve employees
        setEmployees([...employeesData]);
    }, []);

    return (
        <Box className="list-page-container">
            <Box className="list-page-container__header">
                <Typography className="list-page-container__title">Employees</Typography>
                <Button variant="contained" color="orange" className="list-page-container__add-button">
                    Add Employee
                </Button>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="list-page-container__table-cell--header">Name</TableCell>
                            <TableCell className="list-page-container__table-cell--header">Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map(employee => (
                            <TableRow>
                                <TableCell className="list-page-container__table-cell">{employee.name}</TableCell>
                                <TableCell className="list-page-container__table-cell">{employee.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default EmployeePage;