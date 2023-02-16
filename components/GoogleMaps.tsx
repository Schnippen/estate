import React from "react";
import styles from "./Item/ItemInfoDescription.module.css";

function GoogleMaps({ prop }) {

  return (
    <>
      {prop.googleMapsInfo.length > 0 ? (
        <div className={styles.description_container_maps}>
          <iframe
            title="Google map for a listing"
            className={styles.maps}
            src={`https://maps.google.com/maps?q=${parseFloat(
              prop.googleMapsInfo[0].split("").slice(0, -2).join("")
            )},${parseFloat(
              prop.googleMapsInfo[1].split("").slice(0, -2).join("")
            )}&hl=es;&output=embed`}
          ></iframe>
        </div>
      ) : null}
    </>
  );
}

export default GoogleMaps;
