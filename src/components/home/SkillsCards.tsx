import { Box, Card, CardContent, CardHeader, List, ListItem, ListItemText, Typography, Avatar } from '@mui/material';

interface ItemProps {
  principal: string;
  secondary: string;
}
interface ListProps {
  title: string;
  items: ItemProps[];
}

const personalDataContent: ListProps[] = [
  {
    title: "Datos Personales",
    items: [
      { principal: "Numero de Telefono", secondary: "+54 341-15-397 1779" },
      { principal: "Email", secondary: "emiliano.caballero98@gmail.com" },
      { principal: "Zona de Residencia", secondary: "Santa Fe, Rosario" }
    ]
  }
];

const personalDataCard = (
  <Card
  sx={{ 
    width: '300px', height: '260px',
    backgroundColor: '#B7C0DA'
  }}
  >
    <CardHeader
      title= { personalDataContent[0].title }
      sx={{ textAlign: 'center' }}
    />
    <CardContent sx={{ mt: -2.5 }}>
      <ListItem>
        <ListItemText
          primary= { personalDataContent[0].items[0].principal }
          secondary={ personalDataContent[0].items[0].secondary }
        />
      </ListItem>
      <ListItem sx={{ mt: -2 }}>
        <ListItemText
          primary= { personalDataContent[0].items[1].principal }
          secondary={ personalDataContent[0].items[1].secondary }
        />
      </ListItem>
      <ListItem sx={{ mt: -2 }}>
        <ListItemText
          primary= { personalDataContent[0].items[2].principal }
          secondary={ personalDataContent[0].items[2].secondary }
        />
      </ListItem>
    </CardContent>
  </Card>
)

const knowledgeDataContent = [ 
  "HTML", "CSS", "Material-UI", "Bootstrap",
  "Javascript", "Typescript", "React.js", "Node.js",
  "C#", "ASP.NET", "MVC",
  "MySQL", "MongoDB"
]

const knowledgeDataShow = (
  knowledgeDataContent.map( x => (
    <ListItem sx={{ mt: -2.3, width: '120px' }}>
      <ListItemText
        primary= { x }
      />
    </ListItem>
  ))
)

const knowledgeDataCard = (
  <Card
    sx={{ 
      width: '300px',
      backgroundColor: '#B7C0DA',
      ml: 3.7, mr: 3.7
    }}
  >
    <CardHeader
      title= "Conocimientos"
      sx={{ textAlign: 'center' }}
    />
    <CardContent sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      { knowledgeDataShow }
    </CardContent>
  </Card>
)

const softSkillsContent = [
  "Responsable", "Trabajador en Equipo"
]

const softSkillsDataShow = [
  softSkillsContent.map( x => (
    <ListItem sx={{ mt: -2.3, width: '120px' }}>
      <ListItemText
        primary= { x }
      />
    </ListItem>
  ))
]

const softSkillsDataCard = (
  <Card
    sx={{ 
      width: '300px', height: '260px',
      backgroundColor: '#B7C0DA'
    }}
  >
    <CardHeader
      title= "Habilidades Blandas"
      sx={{ textAlign: 'center' }}
    />
    <CardContent sx={{ display: 'flex', flexDirection: 'column', Content: 'center' }}>
      { softSkillsDataShow }
    </CardContent>
  </Card>
)

const SkillsCards = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      { personalDataCard }

      { knowledgeDataCard }

      { softSkillsDataCard }
    </Box>
  )
}

export default SkillsCards