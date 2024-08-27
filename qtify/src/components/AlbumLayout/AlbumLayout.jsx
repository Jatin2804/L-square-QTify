import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import SliderLayout from "../SliderLayout/SliderLayout";
import GridLayout from '../GridLayout/GridLayout';
import Tabs from "./Tabs";
import styles from "./AlbumLayout.module.css"

const AlbumLayout = ({title, url,navigation}) => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const performAPICall = async () => {
    try {
      const response = await axios.get(`https://qtify-backend-labs.crio.do/${url}`);
      console.log(url,response.data); // Check the structure of the response data
      setData(response.data); // Assuming response.data contains the data you need
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    performAPICall();
  }, []);

  // Function to toggle the state of showAll
  const handleToggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  // const clickable= () => {
  //   console.log("Iam clickable");
  // };

  return (
    <Box margin={3.5}>
      
      {navigation ? (
          
        <div className={styles.tabArea}>
        <Typography variant='h6' sx={{ color: "secondary.main" }}>{title}</Typography>
        <Tabs data={data}/>
        </div>
        
        ) : (
          <>
           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='h6' sx={{ color: "secondary.main" }}>{title}</Typography>
           <Button variant="text" sx={{ color: "secondary.main" }} onClick={handleToggleShowAll}>
          {showAll ? "Collapse" : "Show All"}
          </Button>
          </Box>
          {showAll ? <GridLayout data={data} /> : <SliderLayout data={data}/>} 
        </>
        )
        }
    </Box>
  );
};

export default AlbumLayout;
