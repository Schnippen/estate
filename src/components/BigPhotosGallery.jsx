import React from "react";
import styles from "./BigPhotosGallery.module.css";
import {
  HiOutlineX,
  HiArrowLeft,
  HiArrowRight,
  HiOutlinePhotograph,
} from "react-icons/hi";

function BigPhotosGallery({
  isOpened,
  setIsOpened,
  photosList,
  selectedPhoto,
  setSelectedPhoto,
  photosLength,
}) {
  return (
    <div
      className={
        isOpened ? styles.container_bigPhoto_opened : styles.container_bigPhoto
      }
    >
      <div className={styles.ornament_prev}>
        <button
          className={styles.bigPhoto_arrowPrev}
          disabled={selectedPhoto === 0}
          onClick={() => setSelectedPhoto((selectedPhoto) => selectedPhoto - 1)}
        >
          <HiArrowLeft />
        </button>
      </div>
      <div className={styles.ornament_next}>
        <button
          className={styles.bigPhoto_arrowNext}
          disabled={selectedPhoto === photosLength - 1}
          onClick={() => setSelectedPhoto((selectedPhoto) => selectedPhoto + 1)}
        >
          <HiArrowRight />
        </button>
      </div>
      <div className={styles.bigPhoto}>
        <img
          src={photosList[selectedPhoto].props.children.props.src}
          alt="Big Photo"
        />
      </div>
      <button
        className={styles.buttonExit}
        onClick={() => setIsOpened((isOpened) => !isOpened)}
      >
        <HiOutlineX />
      </button>
      <div className={styles.counter}>
        {selectedPhoto + 1}/{photosLength}<HiOutlinePhotograph/>
      </div>
    </div>
  );
}

export default BigPhotosGallery;
