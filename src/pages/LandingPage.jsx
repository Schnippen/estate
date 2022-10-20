import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/LandingPage.css'
import backgroundImg from "../assets/backgroundPhoto2.jpg";
import Card from '../components/Card';
import SimpleSelect from '../components/SimpleSelect';

function LandingPage() {
  let Lorem= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo! Voluptatibus soluta numquam rerum sint nisi voluptatem enim totam asperiores!'

  return (
    <>
      <Navbar />
      <section className="landing__page-section">
        <div className="landing__page-photo">
          <img src={backgroundImg} alt="background image" />
        </div>
        <div className="landing__page-section-searchbar">
          <SimpleSelect title="Rodzaj nieruchomości" />
          <SimpleSelect title="Rodzaj Transakcji" />
        </div>
      </section>
      <section className="landing__page-card-section">
        <ul className="landing__page-card-section-list">
          <Card
            title="Kup Nieruchomość"
            description={Lorem}
            buttonDescription="Srawdź Nieruchomości"
          ></Card>
          <Card
            title="Sprzedaj Nieruchomość"
            description={Lorem}
            buttonDescription="Zobacz swoje możliwości"
          ></Card>
          <Card
            title="Srawdź Mapę"
            description={Lorem}
            buttonDescription="Przyjżyj się dokładnie"
          ></Card>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage