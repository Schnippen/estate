import "./Leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/*
interface TileLayerProps {
  url: string;
  attribution: string;
}


function Leaflet() {
  const [Database, setDatabase] = useState([]);

  useEffect(() => {
    fetchDatabase();
  }, []);

  const fetchDatabase = async () => {
    const response = await fetch(`http://localhost:3100/items`);
    const data = await response.json();
    setDatabase(data);
  };
  const pos:number[] = [50.3, 19.01187]
  
  //console.log(database2[1].googleMapsInfo.map((n) => n.slice(0, -2)));
  //console.log(database2. map((item) => item.googleMapsInfo));
  //console.log(Database.slice(0, 10));
  return (
    <div className="leaflet_container">
      <MapContainer center={pos} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Database.slice(0, 30).map((item: { [key: string]: string }) => (
          <Marker key={item.offerID} position={item.googleMapsInfo}>
            <Popup className="request-popup" position={item.googleMapsInfo}>
              <div className="div">
                <h2>
                  {item.offerTitle
                    .split(" ")
                    .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
                    .join(" ")}
                </h2>
                <h4>{item.titleKategoria}</h4>
                <h3>{`Cena: ${item.priceInfo}`}</h3>
                {typeof item.areaInfo === "string" ? (
                  <h3>{`Powierzchnia: ${item.areaInfo}`}</h3>
                ) : null}
                <Link
                  to="/Item"
                  state={item}
                  onClick={() => {
                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <button className="leaflet-button">Sprawdź</button>
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Leaflet;*/