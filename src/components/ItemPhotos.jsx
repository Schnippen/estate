import React from "react";
import styles from "../components/ItemPhotos.module.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import interiorImg1 from "../assets/interior1.jpg";
import interiorImg2 from "../assets/interior2.jpg";
import interiorImg3 from "../assets/interior3.jpg";
import interiorImg4 from "../assets/interior4.jpg";
import { useState } from "react";
import FullscreenPhotosGallery from "./BigPhotosGallery";
import useActive from "./useActive";

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
  const [isActive, setIsActive] = useActive(false);


  const photosList = photos.map((n, i) => (
    <li
      className={selectedPhoto === i ? styles.selected : null}
      key={i}
      onClick={() => setSelectedPhoto(i)}
    >
      <img src={n} alt={`thumnail_${i}`}></img>
    </li>
  ));

  const photosLength = photos.length;
  const duga = photos.length * 166;

  return (
    <>
      <div className={styles.container_photos_bigPhoto}>
        <button
          className={styles.container_photos_bigPhoto_arrowPrev}
          disabled={selectedPhoto === 0}
          onClick={() => setSelectedPhoto((selectedPhoto) => selectedPhoto - 1)}
        >
          <HiArrowLeft />
        </button>
        <button
          className={styles.container_photos_bigPhoto_arrowNext}
          disabled={selectedPhoto === photosLength - 1}
          onClick={() => setSelectedPhoto((selectedPhoto) => selectedPhoto + 1)}
        >
          <HiArrowRight />
        </button>
        <FullscreenPhotosGallery
          isActive={isActive}
          setIsActive={setIsActive}
          photosList={photosList}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          photosLength={photosLength}
        ></FullscreenPhotosGallery>
        <img
          onClick={setIsActive}
          src={photosList[selectedPhoto].props.children.props.src}
          alt="Big Thumbnail"
        ></img>
      </div>
      <div className={styles.container_photos_thumbnails}>
        <button className={styles.container_photos_bigPhoto_arrowPrev}>
          <HiArrowLeft />
        </button>
        <div>
          <ul style={{ width: duga }} className={styles.thumbnails}>
            {photosList}
          </ul>
        </div>
        <button className={styles.container_photos_bigPhoto_arrowNext}>
          <HiArrowRight />
        </button>
      </div>
    </>
  );
}

export default ItemPhotos;
