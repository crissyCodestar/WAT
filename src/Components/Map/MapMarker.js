import React from "react";
import "./Map.css";

const MapMarker = ({ art, image, onArtClick, selected, key }) => (
    <div className="art"
      onClick={() => onArtClick(art)}>
      <img
        alt=""
        src={image}
        />
        <div className="id_num">
            <span>{art.id}</span>
        </div>
    </div>

);

export default MapMarker;
