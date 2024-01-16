import Link from '@mui/material/Link/Link';

import { Box, Toolbar, MenuItem } from '@mui/material';

interface linkbarProps {
  title: string;
  goTo: string;
}

const linkBar:linkbarProps[] = [ 
  { title: 'Sobre Mi', goTo: '#aboutMe' },
  { title: 'Proyectos', goTo: '#projects' },
  { title: 'Habilidades', goTo: '#skills' },
  { title: 'Contacto', goTo: '#test' }
];

const renderOptionBar = (
  linkBar.map( x => (
    <MenuItem key={x.title} sx={{ mx: -0.6 }}>
      <Link 
        href={ x.goTo }
        sx={{
          textDecoration: 'none', color: '#EFF4FA',
          fontSize: { md: '18px', xs: '15px' },
          ':hover':{
            color: '#9EEBFF'
          }
        }}
      >
        {x.title}
      </Link>
    </MenuItem>
  ))
);

function LinkBar() {
  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        pt: 1.5, left: '50%', 
        transform: 'translate(-50%, 0%)', zIndex: 1
      }}
    >
      <Toolbar 
        sx={{ 
          display: 'flex', justifyContent: { sm: 'center', xs: 'center' },
          width: 380, backgroundColor: '#1F213A', borderRadius: '300px', zIndex: 1
        }}
      >
        { renderOptionBar }
      </Toolbar>
    </Box>
  )
}

export default LinkBar;