import React from "react";
import styles from "../components/ItemPhotos.module.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import interiorImg1 from "../assets/interior1.jpg";
import interiorImg2 from "../assets/interior2.jpg";
import interiorImg3 from "../assets/interior3.jpg";
import interiorImg4 from "../assets/interior4.jpg";
import { useState } from "react";

function ItemPhotos() {
  const photos = [
    interiorImg1,
    interiorImg2,
    interiorImg3,
    interiorImg4,
    interiorImg1,
    interiorImg2,
    interiorImg3,
    interiorImg4,
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const handleSelectedPhoto = (e) => {
    console.log();
  };

  const photosList = photos.map((n, i) => (
    <li
      className={selectedPhoto === i ? styles.selected : null}
      key={i}
      onClick={() => setSelectedPhoto(i)}
    >
      <img src={n} alt={`thumnail_${i}`}></img>
    </li>
  ));

  console.log(photosList[selectedPhoto].props.children.props.src);
  console.log(photos.length);
  return (
    <>
      <div className={styles.container_photos_bigPhoto}>
        <button
          className={styles.container_photos_bigPhoto_arrowPrev}
          disabled={selectedPhoto === 0}
          onClick={() => setSelectedPhoto((prev) => selectedPhoto - 1)}
        >
          <HiArrowLeft />
        </button>
        <img
          src={photosList[selectedPhoto].props.children.props.src}
          alt="Big Thumbnail"
        ></img>
        <button
          className={styles.container_photos_bigPhoto_arrowNext}
          disabled={selectedPhoto === photos.length - 1}
          onClick={() => setSelectedPhoto((prev) => selectedPhoto + 1)}
        >
          <HiArrowRight />
        </button>
      </div>
      <div className={styles.container_photos_thumbnails}>
        <button className={styles.container_photos_bigPhoto_arrowPrev}>
          <HiArrowLeft />
        </button>
        <ul className={styles.thumbnails}>{photosList}</ul>
        <button className={styles.container_photos_bigPhoto_arrowNext}>
          <HiArrowRight />
        </button>
      </div>
    </>
  );
}

export default ItemPhotos;
