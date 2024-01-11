import Link from '@mui/material/Link/Link';

import { Box, Toolbar, MenuItem } from '@mui/material';

interface linkBarProp {
  title: string;
  dominion: string;
}
const linkBar:linkBarProp[] = [ 
  { title:'About Me' , dominion: 'aboutme' }, 
  {title: 'Technologies' , dominion: 'technologies' }, 
  {title: 'Experience' , dominion: 'experience' }, 
  {title: 'Projects' , dominion: 'projects' } 
];

const renderOptionBar = (
  linkBar.map( links => (
    <MenuItem sx={{ mr: 6 }} key={links.title}>
      <Link sx={{ textDecoration: 'none', color: 'white', fontSize: { md: '22px', sm: '15px', xs: '13px' }, ml: { md: -7.4, xs: -2.3} }} href={ `${links.dominion}` }>{links.title}</Link>
    </MenuItem>
  ))
);

function LinkBar() {
  return (
    <Box>
      <Toolbar 
        sx={{ 
          display: 'flex', justifyContent: { sm: 'flex-end', xs: 'center' }, alignItems: 'center',
          position: 'fixed', backgroundColor: '#171624', minWidth: '98vw', boxShadow: '0px 5px 35px rgba(0, 0, 0, 0.5)', zIndex: 1
        }}
      >
        { renderOptionBar }
      </Toolbar>
    </Box>
  )
}

export default LinkBar;