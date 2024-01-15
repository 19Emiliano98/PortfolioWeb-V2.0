import Link from '@mui/material/Link/Link';

import { Box, Toolbar, MenuItem } from '@mui/material';

const linkBar:string[] = [ 'Sobre Mi', 'Experiencias', 'Proyectos' ];

const renderOptionBar = (
  linkBar.map( links => (
    <MenuItem key={links} sx={{ mx: -0.6 }}>
      <Link 
        sx={{
          textDecoration: 'none', color: '#EFF4FA', fontSize: { md: '18px', xs: '15px' },
          ':hover':{
            color: '#9EEBFF'  
          }
        }}
      >
        {links}
      </Link>
    </MenuItem>
  ))
);

function LinkBar() {
  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        pt: 4, left: '50%', 
        transform: 'translate(-50%, 0%)', zIndex: 1
      }}
    >
      <Toolbar 
        sx={{ 
          display: 'flex', justifyContent: { sm: 'center', xs: 'center' },
          width: 300, backgroundColor: '#1F213A', borderRadius: '300px', zIndex: 1
        }}
      >
        { renderOptionBar }
      </Toolbar>
    </Box>
  )
}

export default LinkBar;