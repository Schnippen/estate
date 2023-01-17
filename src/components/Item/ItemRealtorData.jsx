import React from 'react'
import styles from "./ItemRealtorData.module.css";
import profilePicture from "../../assets/profile.jpg";

function RealtorData({prop}) {
  return (
    <header className={styles.section_header}>
      <h2>Skontakuj się</h2>
      <div className={styles.contact}>
        <img
          className={styles.profilePicture}
          src={profilePicture}
          alt="Profile of realtor"
        />
        <address>
          <span>
            <strong>{prop.sellerInfo}</strong>
          </span>
          {prop.estateAgencyInfo.includes("tel.") ? null : (
            <span>{prop.estateAgencyInfo}</span>
          )}
          <span class="phoneNr">
            tel.
            <span class="phone">{prop.telephoneNumberInfo}</span>
          </span>
        </address>
      </div>
    </header>
  );
}

export default RealtorData