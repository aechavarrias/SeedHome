import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import depto_1_code_app from '../../../../static/images/LandinPage/depto_1_code_app.jpg';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DeptoCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <Card sx={{ 
        maxWidth: 345,
        height: 500,
        width: 300,
        margin: 2,
        marginbottom: 1000,
        background: '#6A8D73',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        fontColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A.E.
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Departamento en Venta"
        subheader="September 14, 2016"
        fontColor="white"
      />
      <CardMedia
        component="img"
        height="194"
        image={depto_1_code_app}
        alt="Providencia"
      />
      <CardContent
        sx={{
            fontColor: 'white',
        }}
      >
        {/* <Typography variant="body2" color="text.secondary"> */}
        <Typography variant="body2" color="white">
            Edificio que cuenta con una placa comercial y de oficinas, 
            con entradas diferentes a los departamentos con el fin de crear 
            un micro barrio donde tengas todo lo que necesitas.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Ubicado en la mejor esquina de providencia Antonio Varas y Bilbao.
            * Valor no incluye bodega (desde UF 120), ni estacionamiento (desde UF 470).
          </Typography>
          <Typography paragraph>
            Características y terminaciones: ventanas de termopanel. 
            Cocinas equipadas con encimera, horno y campana. 
            Departamentos con accesos controlados, alarma en todas las puertas de ingreso.
            Dpto en último piso con azoteas incorporadas
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Card sx={{ 
      maxWidth: 345,
      height: 500,
      width: 300,
      margin: 2,
      marginbottom: 1000,
      background: '#6A8D73',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
      fontColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',

      }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              A.E.
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Departamento en Venta"
          subheader="September 14, 2016"
          fontColor="white"
        />
        <CardMedia
          component="img"
          height="194"
          image={depto_1_code_app}
          alt="Providencia"
        />
        <CardContent
          sx={{
              fontColor: 'white',
          }}
        >
          {/* <Typography variant="body2" color="text.secondary"> */}
          <Typography variant="body2" color="white">
              Edificio que cuenta con una placa comercial y de oficinas, 
              con entradas diferentes a los departamentos con el fin de crear 
              un micro barrio donde tengas todo lo que necesitas.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Ubicado en la mejor esquina de providencia Antonio Varas y Bilbao.
              * Valor no incluye bodega (desde UF 120), ni estacionamiento (desde UF 470).
            </Typography>
            <Typography paragraph>
              Características y terminaciones: ventanas de termopanel. 
              Cocinas equipadas con encimera, horno y campana. 
              Departamentos con accesos controlados, alarma en todas las puertas de ingreso.
              Dpto en último piso con azoteas incorporadas
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ 
        maxWidth: 345,
        height: 500,
        width: 300,
        margin: 2,
        marginbottom: 1000,
        background: '#6A8D73',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        fontColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A.E.
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Departamento en Venta"
        subheader="September 14, 2016"
        fontColor="white"
      />
      <CardMedia
        component="img"
        height="194"
        image={depto_1_code_app}
        alt="Providencia"
      />
      <CardContent
        sx={{
            fontColor: 'white',
        }}
      >
        {/* <Typography variant="body2" color="text.secondary"> */}
        <Typography variant="body2" color="white">
            Edificio que cuenta con una placa comercial y de oficinas, 
            con entradas diferentes a los departamentos con el fin de crear 
            un micro barrio donde tengas todo lo que necesitas.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Ubicado en la mejor esquina de providencia Antonio Varas y Bilbao.
            * Valor no incluye bodega (desde UF 120), ni estacionamiento (desde UF 470).
          </Typography>
          <Typography paragraph>
            Características y terminaciones: ventanas de termopanel. 
            Cocinas equipadas con encimera, horno y campana. 
            Departamentos con accesos controlados, alarma en todas las puertas de ingreso.
            Dpto en último piso con azoteas incorporadas
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Card sx={{ 
        maxWidth: 345,
        height: 500,
        width: 300,
        margin: 2,
        marginbottom: 1000,
        background: '#6A8D73',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        fontColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A.E.
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Departamento en Venta"
        subheader="September 14, 2016"
        fontColor="white"
      />
      <CardMedia
        component="img"
        height="194"
        image={depto_1_code_app}
        alt="Providencia"
      />
      <CardContent
        sx={{
            fontColor: 'white',
        }}
      >
        {/* <Typography variant="body2" color="text.secondary"> */}
        <Typography variant="body2" color="white">
            Edificio que cuenta con una placa comercial y de oficinas, 
            con entradas diferentes a los departamentos con el fin de crear 
            un micro barrio donde tengas todo lo que necesitas.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Ubicado en la mejor esquina de providencia Antonio Varas y Bilbao.
            * Valor no incluye bodega (desde UF 120), ni estacionamiento (desde UF 470).
          </Typography>
          <Typography paragraph>
            Características y terminaciones: ventanas de termopanel. 
            Cocinas equipadas con encimera, horno y campana. 
            Departamentos con accesos controlados, alarma en todas las puertas de ingreso.
            Dpto en último piso con azoteas incorporadas
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}