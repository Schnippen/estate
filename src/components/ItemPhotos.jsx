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
    interiorImg1,
    interiorImg2,
    interiorImg3,
    interiorImg4,
    "https://picsum.photos/500/500?random=1",
    "https://picsum.photos/500/500?random=2",
    "https://picsum.photos/500/500?random=3",
    "https://picsum.photos/500/500?random=4",
    "https://picsum.photos/500/500?random=5",
    "https://picsum.photos/500/500?random=6",
    "https://picsum.photos/500/500?random=7",
    "https://picsum.photos/500/500?random=8",
    "https://picsum.photos/500/500?random=9",
    "https://picsum.photos/500/500?random=10",
  ];
  /* Array.from(    { length: 40 },    () =>      `https://picsum.photos/500/500?random=${Math.floor(Math.random() * 40)}`
  );*/

  //stestuj thumnaile i dlugosc photos array
  //zdjecia >= photos.length - 4 ? photos.length - 4 : zdjecia,
  //photos.length > 5 ? 5 + zdjecia : photos.length;

  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [isActive, setIsActive] = useActive(false);
  const [zdjecia, setZdjecia] = useState(0);

  const photosList = photos.map((n, i) => (
    <li
      className={selectedPhoto === i ? styles.selected : null}
      key={i}
      onClick={() => setSelectedPhoto(i)}
    >
      <img src={n} alt={`thumnail_${i}`}></img>
    </li>
  ));

  const photosVisible = photosList.slice(
    zdjecia,
    photos.length >= 5 ? 5 + zdjecia : photos.length
  );

  const photosLength = photos.length;
  console.log(selectedPhoto, "selectedphoto");
  console.log(zdjecia, "zdjecia");
  console.log(photos.length, "length");

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
          disabled={selectedPhoto === photos.length - 1}
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
        <button
          className={styles.container_photos_bigPhoto_arrowPrev}
          disabled={zdjecia <= 0}
          onClick={() => setZdjecia((zdjecia) => zdjecia - 1)}
        >
          <HiArrowLeft />
        </button>
        <div className={styles.thumbnails_wrapper}>
          <ul className={styles.thumbnails}>{photosVisible}</ul>
        </div>
        <button
          className={styles.container_photos_bigPhoto_arrowNext}
          disabled={zdjecia >= photos.length || zdjecia >= photos.length - 5}
          onClick={() => setZdjecia((zdjecia) => zdjecia + 1)}
        >
          <HiArrowRight />
        </button>
      </div>
    </>
  );
}

export default ItemPhotos;