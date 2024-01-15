import { Box, Card, CardMedia } from "@mui/material"

const Tags = ( param:any ) => {
  const res = param.param;

  console.log(res);
  
  const renderLenguages = res.map( ( x:any ) => (
    <Card 
      sx={{ 
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        borderRadius: '30px', width: 31, height: 31, mt: 2, mb: 0.6, mx: 0.5
      }}
    >
      <CardMedia 
      sx={{ width: 31, height: 31, borderRadius: '15px' }}
      image= { x.image }
      title= { x.title }
      />
    </Card>
  ))

  return (
    <Box sx={{ display: 'flex' }}>
      { renderLenguages }
    </Box>
  )
}

export default Tags