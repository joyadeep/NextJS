import { Facebook, Instagram, Twitter } from "@mui/icons-material"
import { AppBar, Box, IconButton, TextField, Toolbar, Typography } from "@mui/material"
import theme from "../config/theme"
import Link from 'next/link'
import { Poppins } from "@next/font/google"

const Header = () => {
  return (
    <AppBar position="static" elevation={0} sx={{bgcolor:theme.palette.secondary.light}}>
        <Toolbar sx={{justifyContent:'space-between'}}>
            <TextField size="small" sx={{bgcolor:'white',borderRadius:'15px',outline:'0px','& fieldset':{border:'none'}}} placeholder="Search" />
            <Link href="/"style={{textDecoration:'none'}}>
            <Typography variant="h4" fontWeight={'bold'}  color="#434343">Design</Typography>
            </Link>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <IconButton LinkComponent={Link} href="/about">
                <Facebook/>
            </IconButton>
            <IconButton LinkComponent={Link} href="/about">
                <Instagram/>
            </IconButton>
            <IconButton LinkComponent={Link} href="/about">
                <Twitter/>
            </IconButton>
            
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header