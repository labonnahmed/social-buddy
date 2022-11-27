import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import fakeData from '../../Utilities/fakeData.json';
import { Avatar, Box, Button } from '@mui/material';

export default function Comment(props) {
    const{img, id} = props
    const[comments, setComments] = useState([]);
    useEffect(() => {
        const showComments= fakeData.filter( cm => cm.postId == id);
        setComments(showComments);
    }, [])
    
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Button variant="contained">SHOW COMMENTS</Button>
        </AccordionSummary>
        {
            comments.map(comment => 
                <AccordionDetails key={comment.id} style={{border:'1px solid grey', margin:'5px', borderRadius:'5px'}}>
                    <Box sx={{ display: 'flex', my: 2 }}>
                        <Avatar alt="Remy Sharp" src={img.userImageURL} />
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', m: 1 }}>{comment.name}</Typography>
                            <Typography sx={{ color: 'text.disabled', fontSize: 14}}>Email: {comment.email}</Typography>
                        </Box>
                    </Box>
                    <Typography>Comment: {comment.body}</Typography>
                </AccordionDetails>)
        }
        
      </Accordion>
  );
}