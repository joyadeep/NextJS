import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import TableActons from './_child/TableActons'
import data from '../database/data.json'

const EmployeeList = () => {
  return (
    <Box mt={3}>
        <TableContainer>
            <Table>
                <TableHead sx={{bgcolor:'black'}}>
                    <TableRow>
                        <TableCell sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>Name</TableCell>
                        <TableCell sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>Email</TableCell>
                        <TableCell sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>Phone</TableCell>
                        <TableCell sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>Status</TableCell>
                        <TableCell sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((item)=>(
                            <TableRow key={item.id}>
                        <TableCell sx={{fontSize:'16px'}}>{item.fullname}</TableCell>
                        <TableCell  sx={{fontSize:'16px'}}>{item.email}</TableCell>
                        <TableCell sx={{fontSize:'16px'}}>{item.phone}</TableCell>
                        <TableCell sx={{padding:0}}>
                            {
                                item.status=='active'?<Button size={'small'} variant="contained" disableElevation sx={{textTransform:'none',borderRadius:'25px',bgcolor:'green',fontSize:'14px',px:2}}>Active</Button>:<Button size={'small'} variant="contained" disableElevation sx={{textTransform:'none',borderRadius:'15px',bgcolor:'red',fontSize:'14px',px:2}}>Active</Button>
                            }
                        </TableCell>
                        <TableCell sx={{padding:0}}>
                            <TableActons/>
                        </TableCell>
                    </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default EmployeeList