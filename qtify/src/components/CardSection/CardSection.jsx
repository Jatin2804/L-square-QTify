import React from 'react';
import AlbumLayout from "../AlbumLayout/AlbumLayout"
import "./CardSection.css"

const CardSection = () => {
  return (
    <div>
      <AlbumLayout title="Top Albums" url="albums/top"/>
      <AlbumLayout title="New Albums" url="albums/new"/>
      <hr color='grey'/>
      <AlbumLayout title="Songs" url="songs" navigation={true}/>
      <hr color='grey'/>
    </div>
  )
}

export default CardSection;
