import { Delete, ViewAgenda } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'

const TableActons = () => {
  return (
   <Box display="flex" columnGap={2}>
    <IconButton>
    <Delete/>
    </IconButton>
    <IconButton>    
    <ViewAgenda/>
    </IconButton>
   </Box>
  )
}

export default TableActons