import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AlbumCard from "../Card/Card";
import Container from '@mui/material/Container';

const GridLayout = ({data}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Grid container spacing={2}>
        {data.map((cardData) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={cardData.id}>
              <AlbumCard value={cardData.id} cardData={cardData} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  )
}

export default GridLayout;
