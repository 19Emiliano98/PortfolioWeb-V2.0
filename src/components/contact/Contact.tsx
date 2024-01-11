import { Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column',
        width: 40,
        color: '#B7C0DA', textDecoration: 'none'
      }}
    >
      <Link sx={{ color: '#B7C0DA', borderRadius: '20px', width: 34, height: 33, mb: 1.5 }} href={ 'https://github.com/19Emiliano98' }>
        <GitHubIcon fontSize='large' sx={{ mb: 1 }}/>
      </Link>
      <Link sx={{ color: '#B7C0DA', borderRadius: '20px', width: 34, height: 33, mb: 1.5 }} href={ 'https://www.linkedin.com/in/emiliano-caballero98/' }>
        <LinkedInIcon fontSize='large' sx={{ mb: 1 }}/>
      </Link>
      {/* <Link sx={{ color: '#B7C0DA', borderRadius: '20px', width: 34, height: 33, mb: 1.5 }} href={ 'https://www.emiliano.caballero98@gmail.com' }>
        <MailOutlineIcon fontSize='large'/>
      </Link> */}
    </Box>
  )
}

export default Contact