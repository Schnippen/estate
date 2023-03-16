import React, { useState } from "react";
import styles from "./CreateFormContactDetails.module.css";
import GoogleMapReact from "google-map-react";

type pinPositionTypes = {
  lat: number | null;
  lng: number | null;
};

function CreateFormLocation() {
  const [pinPosition, setPinPosition] = useState<pinPositionTypes>({
    lat: null,
    lng: null,
  });

  const handleMapClick = ({
    lat,
    lng,
  }: {
    lat: number | null;
    lng: number | null;
  }) => {
    setPinPosition({ lat, lng });
  };

  const Pin = () => (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "red",
      }}
    />
  );

  return (
    <article className={styles.article}>
      <h3>Lokalizacja</h3>
      <section className={styles.article_section}></section>
    </article>
  );
}

export default CreateFormLocation;
//            <Pin lat={pinPosition.lat} lng={pinPosition.lng} />
/*
        <div style={{ height: "400px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: REACT_APP_API_KEY=your_api_key_here,
            }}
            defaultCenter={{ lat: 50.259421, lng: 19.021984 }}
            defaultZoom={12}
            onClick={handleMapClick}
          ></GoogleMapReact>
              </div>
          */
