import { Box, Toolbar, MenuItem, Link } from '@mui/material';

interface linkbarProps {
  title: string;
  goTo: string;
}

const linkBar:linkbarProps[] = [ 
  { title: 'Sobre Mi', goTo: '#aboutMe' },
  { title: 'Proyectos', goTo: '#projects' },
  { title: 'Habilidades', goTo: '#skills' },
  { title: 'Contacto', goTo: '#contact' }
];

const renderOptionBar = (
  linkBar.map( x => (
    <MenuItem key={x.title} sx={{ mx: { sm: -0.6, xs: -1.35 } }}>
      <Link 
        href={ x.goTo }
        sx={{
          textDecoration: 'none', color: '#EFF4FA',
          fontSize: { sm: '18px', xs: '13px' },
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
        pt: 1.8, left: '50%', 
        transform: 'translate(-50%, 0%)', zIndex: 1
      }}
    >
      <Toolbar 
        sx={{ 
          display: 'flex', justifyContent: { sm: 'center', xs: 'center' },
          width: { sm: 380, xs: 256 },
          borderRadius: '300px', zIndex: 1,
          backdropFilter: 'saturate(200%) blur(15px)'
        }}
      >
        { renderOptionBar }
      </Toolbar>
    </Box>
  )
}

export default LinkBar;