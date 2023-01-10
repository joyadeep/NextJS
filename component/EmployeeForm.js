import { Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const EmployeeForm = () => {
  return (
   <Box width={'50%'} mt={2}>
    <form>
   <Grid container rowSpacing={2} columnSpacing={1}>
    <Grid item md={6} lg={6}>
        <TextField size='small' type="text" placeholder='fullname' sx={{width:'100%'}}/>
    </Grid>
    <Grid item md={6} lg={6}>
        <TextField size='small' type="email" placeholder='email' sx={{width:'100%'}}/>
    </Grid>
    <Grid item md={6}>
        <TextField size='small' type="text" placeholder='phone' sx={{width:'100%'}}/>
    </Grid>
    <Grid item md={6}>
        <TextField size='small' type="text" placeholder='radio buttons' sx={{width:'100%'}}/>
    </Grid>
   </Grid>
   <Button type="submit" variant="contained" disableElevation color={'secondary'} sx={{textTransform:'none',mt:2}}>Add</Button>
   </form>
   </Box>
  )
}

export default EmployeeForm