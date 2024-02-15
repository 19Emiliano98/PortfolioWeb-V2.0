import { Box, Button, Card, CardContent, Typography, } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { TypographyBody, ThemeColors, ButtonStyles } from "../GlobalStyles"
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: false,
  background: '#32304F',
  color: '#fff'
});

const SendMail = () => {
  const copyToClipboard = () => {
    const res = document.getElementById('emailDirection') as HTMLInputElement | null
    
    if ( res != null ) {
      navigator.clipboard.writeText(res.textContent!)
    }
    
    Toast.fire({
      icon: "info",
      title: "Copiado!"
    });
  }
  // <Box sx={{ display: 'flex', mb: 10, flexDirection: { sm: 'row', xs: 'column'}, alignItems: 'center' }}>
  return (
    <Box 
      sx={{ 
        display: 'flex', justifyContent: 'center',
        flexDirection: { sm: 'row', xs: 'column' }, alignItems: { sm: 'normal', xs: 'center' },
        mt: 5, pb: 8 
      }}
    >
      <Card
        sx={{
          display: 'flex',
          width: { sm: 460, xs: 300 }, height: 52,
          backgroundColor: ThemeColors.backgroundColor,
          border: `2px solid ${ThemeColors.fontColor}`,
          borderRadius: '15px', mr: { sm: 2, xs: 0 }
        }}  
      >
        <CardContent>
          <Typography id='emailDirection' sx={{ color: TypographyBody }} variant="body1">
            emiliano.caballero98@gmail.com
          </Typography>
        </CardContent>
      </Card>
      
      <Button
        sx={{ 
          width: 90, height: 55,
          color: ButtonStyles, borderRadius: '12px', mt: { sm: 0, xs: 2}
        }}
        onClick={() => copyToClipboard()}
      >
        <ContentCopyIcon sx={{ fontSize: '1.7rem', color: 'black' }} fontSize="inherit"/>
      </Button>
    </Box>
  )
}

export default SendMail