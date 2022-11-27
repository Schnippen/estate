import React from "react";
import styles from "./ItemInfoDescription.module.css";
import Table from "./Table";

function ItemInfoDescription({ prop }) {
  //const prop = Database[1];

  const description = prop.descriptionInfo;
  //<div>dangerouslySetInnerHTML={{__html:prop.descriptionInfo}}</div>
  return (
    <div className={styles.description_container}>
      <Table prop={prop} />
      <div className={styles.description_wrapper}>
        <h3>Opis nieruchomości</h3>
        <div style={{ whiteSpace: "pre-wrap" }}>{prop.descriptionInfo}</div>
        <div className={styles.description_published}>
          {typeof prop.publishedInfo === "string" ?
          <p>Ogłoszenie zostało dodane {prop.publishedInfo}</p>:
          null}
        </div>
      </div>
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
    </div>
  );
}

export default ItemInfoDescription;

/*Informajce szczegółowe
Budynek
Ogrzewanie
Udogodnienia
Opis
Mapa*/
/*        <tr>
          <th>Powierzchnia</th>
          <td>{prop.areaInfo}</td>
        </tr> 
        <tr>
          <TableRow name="Ilość okien" />
          <TableData prop={prop.windowWoodworkInfo} />
        </tr>
        <div
          dangerouslySetInnerHTML={{
            __html: prop.descriptionInfo.replace(/\n/g, "<br />"),
          }}
        ></div>
        */
