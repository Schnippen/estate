import React from "react";
import styles from "./BreadCrumbs.module.css";
import { Link } from "react-router-dom";

function BreadCrumbs({ prop }: any) {
  return (
    <div className={styles.breadcrumbs}>
      <nav className={styles.breadcrumbs_nav}>
        <ul>
          <Link to={"/Offers"}>
            <li>Go Back</li>
          </Link>
          <li>Kategoria</li>
          <li>Województwo</li>
          <li>{prop ? prop.cityInfo : "Miasto"}</li>
        </ul>
      </nav>
    </div>
  );
}

export default BreadCrumbs;
