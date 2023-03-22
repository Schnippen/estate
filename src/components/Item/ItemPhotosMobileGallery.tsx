import React, { useState, useRef } from "react";
import { HiCursorClick, HiCamera, HiOutlineX } from "react-icons/hi";
import styles from "../Item/ItemPhotos.module.css";
import useActive from "../../utils/useActive";

type ItemPhotosMobileGalleryTypes = { photos: string[] };

function ItemPhotosMobileGallery({ photos }: ItemPhotosMobileGalleryTypes) {
  const [isOpened, setIsOpened] = useActive(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number>();
  const [fullscreen, setFullscreen] = useActive(false);

  const handleImageClick = (i: number) => {
    setSelectedPhoto(i);
    setFullscreen(!fullscreen);
  };

  const infiniteGallery = useRef(null);

  const MobileGallery = (
    <ul className={styles.mobile_gallery}>
      {photos.slice(0, 3).map((n, i) => (
        <li className={styles.mobile_gallery_more}>
          {i === photos.slice(0, 3).length - 1 ? (
            <div className={styles.mobile_gallery_image_unique_wrapper}>
              <img
                src={n}
                alt={`thumnail_${i}`}
                className={styles.mobile_gallery_image}
              ></img>
              <div
                className={styles.mobile_gallery_custom_element}
                onClick={() => setIsOpened(!isOpened)}
              >
                <div className={styles.mobile_gallery_more}>
                  <HiCursorClick />
                  <p>ZOBACZ GALERIĘ</p>
                  <div className={styles.mobile_gallery_more_info}>
                    <HiCamera />
                    {photos.length}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.mobile_gallery_image_wrapper}>
              <img
                src={n}
                alt={`thumnail_${i}`}
                className={styles.mobile_gallery_image}
              ></img>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const MobileGridGallery = (
    <div>
      <nav className={styles.mobile_grid_gallery_nav}>
        <div
          className={styles.mobile_grid_gallery_exit}
          onClick={() => setIsOpened(!isOpened)}
        >
          <HiOutlineX />
        </div>
        <div className={styles.mobile_grid_gallery_nav_title}>Galeria</div>
      </nav>
      <section className={styles.mobile_grid_gallery_section}>
        {fullscreen ? (
          <ul ref={infiniteGallery} className={styles.infinite_gallery}>
            {photos.map((photo, index) => (
              <li key={index} className={styles.infinite_gallery_item}>
                <img
                  src={photo}
                  alt={`infinite_gallery_photo_${index}`}
                  className={styles.mobile_gallery_image_infinite}
                />
              </li>
            ))}
          </ul>
        ) : (
          <ul className={styles.mobile_grid_gallery}>
            {photos.map((n, i) => (
              <li key={i} className={styles.mobile_grid_gallery_item}>
                <img
                  src={n}
                  alt={`thumnail_${i}`}
                  className={styles.mobile_grid_gallery_item}
                  onClick={() => handleImageClick(i)}
                ></img>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );

  return <>{isOpened ? MobileGridGallery : MobileGallery}</>;
}

export default ItemPhotosMobileGallery;
