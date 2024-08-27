import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';
import styles from "./Card.module.css"

export default function ActionAreaCard({cardData}) {
  const chipData = cardData.songs 
?`${cardData.follows} Followers`
  :`${cardData.likes} Likes`; 
  
  return (
    <>
    
    <Card className={styles.card} sx={{ maxWidth: "170px", maxHeight: 232, boxSizing: 'border-box',padding:"6px",backgroundColor:"black" }}>
      <CardActionArea className={styles.cardActionArea} bgcolor="black" sx={{ padding: "0px",backgroundColor:"white",borderRadius:"10px"}}>
        <CardMedia
          component="img"
          image={cardData.image}
          alt="Album Image"
          className={styles.cardMedia}
          sx={{ margin: 0, padding: 0, boxSizing: 'border-box',height:"170px" }}
        />
        <CardContent sx={{ padding: "0px", '&:last-child': { paddingBottom: 0 } }}>
          <Box sx={{ width: 159, height: 33, padding: "0px", boxSizing: 'border-box' }}>
            <Chip label={chipData} 
            sx={{backgroundColor:"black",color:"white", height: 28,margin:"2px" }} />
          </Box>
        </CardContent>
      </CardActionArea>
      <Typography variant="subtitle1"  sx={{ margin: "0px",color:"white" }}>
      {cardData.title}
     </Typography>
    </Card>
    </>
  );
}