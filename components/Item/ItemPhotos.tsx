import React from "react";
import styles from "../Item/ItemPhotos.module.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useState } from "react";
import FullscreenPhotosGallery from "../FullscreenPhotosGallery";
import ItemPhotosMobileGallery from "./ItemPhotosMobileGallery";
import useActive from "./../useActive";

interface ItemPhotosProps {
  isMobile: boolean;
}

const ItemPhotos:React.FC<ItemPhotosProps> = ({ isMobile }) =>{
  const photos = [
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

  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [isActive, setIsActive] = useActive(false);
  const [thumbnail, setThumbnail] = useState(0);

  //thumnails list
  const photosList = photos.map((n, i:number) => (
    <li
      className={selectedPhoto === i ? styles.selected : undefined}
      key={i}
      onClick={() => setSelectedPhoto(i)}
    >
      <img src={n} alt={`thumnail_${i}`}></img>
    </li>
  ));

  const visibleThumnailsPhotos = photosList.slice(
    thumbnail,
    photos.length >= 5 ? 5 + thumbnail : photos.length
  );

  const photosLength = photos.length;

  const BigPhotosGallery = (
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
        onClick={()=>setIsActive}
        src={photosList[selectedPhoto].props.children.props.src}
        alt="Big Thumbnail"
        loading="lazy"
        className={styles.photo}
      ></img>
    </div>
  );

  const ThumbnailsCarousel = (
    <div className={styles.container_photos_thumbnails}>
      <button
        className={styles.container_photos_bigPhoto_arrowPrev}
        disabled={thumbnail <= 0}
        onClick={() => setThumbnail((thumbnail) => thumbnail - 1)}
      >
        <HiArrowLeft />
      </button>
      <div className={styles.thumbnails_wrapper}>
        <ul className={styles.thumbnails}>{visibleThumnailsPhotos}</ul>
      </div>
      <button
        className={styles.container_photos_bigPhoto_arrowNext}
        disabled={thumbnail >= photos.length || thumbnail >= photos.length - 5}
        onClick={() => setThumbnail((thumbnail) => thumbnail + 1)}
      >
        <HiArrowRight />
      </button>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <ItemPhotosMobileGallery photos={photos} />
      ) : (
        BigPhotosGallery
      )}
      {isMobile ? null : ThumbnailsCarousel}
    </>
  );
}

export default ItemPhotos;
