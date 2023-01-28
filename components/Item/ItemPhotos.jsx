import React from "react";
import styles from "../Item/ItemPhotos.module.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import interiorImg1 from "../../assets/interior1.jpg";
import interiorImg2 from "../../assets/interior2.jpg";
import interiorImg3 from "../../assets/interior3.jpg";
import interiorImg4 from "../../assets/interior4.jpg";
import { useState } from "react";
import FullscreenPhotosGallery from "../FullscreenPhotosGallery";
import useActive from "./../useActive";

function ItemPhotos({ isMobile }) {
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

  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [isActive, setIsActive] = useActive(false);
  const [thumbnail, setThumbnail] = useState(0);

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
        onClick={setIsActive}
        src={photosList[selectedPhoto].props.children.props.src}
        alt="Big Thumbnail"
        loading="lazy"
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
        <ul className={styles.thumbnails}>{photosVisible}</ul>
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

  const MobileGallery = (
    <div className={styles.mobile_gallery}>
      <div className={styles.mobile_gallery_more}>qwe</div>
      <div className={styles.mobile_gallery_more}>qwe</div>
      <div className={styles.mobile_gallery_more}>qwe</div>
      <div className={styles.mobile_gallery_more}>qwe</div>
      <div className={styles.mobile_gallery_more}>qwe</div>
      <div className={styles.mobile_gallery_more}>qwe</div>
    </div>
  );

  return (
    <>
      {isMobile ? MobileGallery : BigPhotosGallery}
      {isMobile ? null : ThumbnailsCarousel}
    </>
  );
}

export default ItemPhotos;
/*      <img
        src={photosList[selectedPhoto].props.children.props.src}
        alt="Mobile Thumbnail Photo"
        loading="lazy"
        className={styles.mobile_gallery_img}
      ></img>*/
