import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = ({ live }) => {
  const componentCode = `
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="Random"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Material UI Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a sample card using Material UI components.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
`;

  if (live) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="Random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Material UI Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a sample card using Material UI components.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

  // Display the component code if live is false
  return <pre>{componentCode}</pre>;
};

export default CardComponent;
