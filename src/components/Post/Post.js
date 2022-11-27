import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Post(props) {
    const {title, body, id} =props.post
    return (
      <Card sx={{ m: 5, p: 5 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Today's post</Typography>
            <Typography variant="h5" component="div">{title}</Typography>
            <Typography variant="body2">{body}.</Typography>
        </CardContent>
        <Link to={`/user/${id}`} style={{textDecoration:'none'}}>
            <CardActions>
                <Button size="small" variant="contained">Learn More</Button>
            </CardActions>
      </Link>
    </Card>
    );
  }