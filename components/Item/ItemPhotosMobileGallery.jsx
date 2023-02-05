import React, { useState } from "react";
import { HiCursorClick, HiCamera, HiOutlineX } from "react-icons/hi";
import styles from "../Item/ItemPhotos.module.css";
import useActive from "../useActive";

function ItemPhotosMobileGallery({ photos }) {
  const [isOpened, setIsOpened] = useActive(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [fullscreen, setFullscreen] = useActive(false);

  const handleImageClick = (i) => {
    setSelectedPhoto(i);
    setFullscreen();
    console.log(selectedPhoto);
    console.log(fullscreen);
  };

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
                onClick={setIsOpened}
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
        <div className={styles.mobile_grid_gallery_exit} onClick={setIsOpened}>
          <HiOutlineX />
        </div>
        <div className={styles.mobile_grid_gallery_nav_title}>Galeria</div>
      </nav>
      <section className={styles.mobile_grid_gallery_section}>
        {fullscreen ? (
          <div>qwe</div>
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
