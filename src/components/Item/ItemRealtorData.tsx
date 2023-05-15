import React from "react";
import styles from "./ItemRealtorData.module.css";
import DefaultProfilePicture from "../../assets/profile.jpg";
import UserProfilePicture from "../../assets/profile.jpg";

function RealtorData({ prop }: { prop: any }) {
  return (
    <header className={styles.section_header}>
      <h2>Skontakuj się</h2>
      <div className={styles.contact}>
        <img
          className={styles.profilePicture}
          src={UserProfilePicture || DefaultProfilePicture}
          alt="Profile of realtor"
        />
        <address>
          <span>
            <strong>{prop.sellerInfo}</strong>
          </span>
          {prop.estateAgencyInfo.includes("tel.") ? null : (
            <span>{prop.estateAgencyInfo}</span>
          )}
          <span className="phoneNr">
            tel.
            <span className="phone">{prop.telephoneNumberInfo}</span>
          </span>
        </address>
      </div>
    </header>
  );
}

export default RealtorData;
