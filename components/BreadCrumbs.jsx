import React from 'react'
import styles from "./BreadCrumbs.module.css"
import { Link} from "react-router-dom";

function BreadCrumbs({}) {


  return (
    <div className={styles.breadcrumbs}>
      <nav>
        <ul>
        <Link to={-1}>
          <li>Wróć</li>
          </Link>
          <li>Kategoria </li>
          <li>Województwo</li>
          <li>Miasto</li>
        </ul>
      </nav>
    </div>
  );
}

export default BreadCrumbs