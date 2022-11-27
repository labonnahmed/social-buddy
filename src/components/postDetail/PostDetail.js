import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Comment from '../Comment/Comment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PostDetail = () => {
    const {id} = useParams();
    const[post, setPost] = useState({});
    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const [img, setImg] =useState({});
    useEffect(() => {
        fetch('https://pixabay.com/api/?key=26222379-3dbfc1409251541de1e8eb6c2&q=yellow+flowers&image_type=photo')
        .then(res => res.json())
        .then(data => setImg(data.hits[id]))
    }, []);
    return (
        <>  <Link to="/" style={{textDecoration:'none'}}>
                <Button sx={{ mx: 2, my:0.25 }} size="large" variant="contained"><ArrowBackIcon></ArrowBackIcon> Back</Button>
            </Link>
            <Grid display="flex" justifyContent="center" alignItems="center">
                <Card sx={{ maxWidth: 800 }}>
                    <CardActionArea>
                        <CardMedia 
                            style={{objectFit: 'cover'}}
                            component='img'
                            height="330"
                            image={img.previewURL}
                            alt="fruits"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {post.body}.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Comment img={img} id={id}></Comment>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default PostDetail;