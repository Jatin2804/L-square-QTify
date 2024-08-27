import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from "axios";
import SliderLayout from "../SliderLayout/SliderLayout";

export default function ColorTabs({ data }) {
  const [tabsData, setTabsData] = useState([]);
  const [value, setValue] = useState('all');
  const [filteredData, setFilteredData] = useState([]);

  const performAPICall = async () => {
    try {
      const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
      setTabsData(response.data.data); // Assuming response.data.data contains the genres
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    performAPICall();
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredData(data); // Set filteredData only when data is available
    }
  }, [data]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 'all') {
      setFilteredData(data);  // Show all data if "All Songs" is selected
    } else {
      const filtered = data.filter((item) => 
        item.genre && item.genre.label === newValue
      );
      setFilteredData(filtered);
    }
  };

  console.log("Filtered Data:", filteredData); // Log filtered data
  // console.log("Data", data); // Log original data

  return (
    <>
      <Box sx={{ width: '100%', margin: "10px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          variant="scrollable"  // Enable scrolling
          scrollButtons="auto"  // Show scroll buttons automatically
          allowScrollButtonsMobile  // Allow scroll buttons on mobile
        >
          {tabsData.map((tab) => (
            <Tab key={tab.key} sx={{ color: "white" }} value={tab.label} label={tab.label} />
          ))}
          <Tab sx={{ color: "white" }} value="all" label="All Songs" />
        </Tabs>
      </Box>
      <SliderLayout data={filteredData} />
    </>
  );
}
