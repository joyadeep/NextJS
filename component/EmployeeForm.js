import { Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const EmployeeForm = () => {
    const[formData,setFormData]=useState({})
   
    const handleChange=(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        {
            Object.keys(formData).length===0?console.log("empty form"):console.log("form data = ",formData)
        }
        
    }
  return (
   <Box width={'50%'} mt={2}>
    <form onSubmit={handleSubmit}>
        <FormControl>
   <Grid container rowSpacing={2} columnSpacing={1}>
    <Grid item md={6} lg={6}>
        <TextField size='small' name='fullname' value={formData.fullname} onChange={handleChange} type="text" placeholder='fullname' sx={{width:'100%'}}/>
    </Grid>
    <Grid item md={6} lg={6}>
        <TextField size='small' name="email" value={formData.email} onChange={handleChange} type="email" placeholder='email' sx={{width:'100%'}}/>
    </Grid>
    <Grid item md={6}>
        <TextField size='small' name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder='phone' sx={{width:'100%'}}/>
    </Grid>
    <Grid item md={6}>
       <RadioGroup value={formData.status} name="status"
    onChange={handleChange} sx={{display:'flex',flexDirection:'row'}}>
            <FormControlLabel value="active"  control={<Radio color='secondary' />} label="Active" />
          <FormControlLabel value="inactive" control={<Radio color='secondary' />} label="Inactive" />
       </RadioGroup>
    </Grid>
   </Grid>
   <Button type="submit" variant="contained" disableElevation color={'secondary'} sx={{textTransform:'none',mt:2,width:'fit-content'}}>Add</Button>
   </FormControl>
   </form>
   </Box>
  )
}

export default EmployeeForm