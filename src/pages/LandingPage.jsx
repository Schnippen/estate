import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/LandingPage.css'
import Card from '../components/Card';

function LandingPage() {
  let Lorem= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo! Voluptatibus soluta numquam rerum sint nisi voluptatem enim totam asperiores!'

  return (
    <>
      <Navbar />
      <div className="landing__page-photo">background photo</div>
      <section className="landing__page-section">
        <div className="landing__page-section-searchbar">searchbar</div>
      </section>
      <section className="landing__page-card-section">
        <ul className="landing__page-card-section-list">
          <Card
            img="https://www.freepik.com/free-photo/amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers_10729696.htm#query=estate&position=4&from_view=search&track=sph"
            title="Kup Nieruchomość"
            description={Lorem}
            buttonDescription="Srawdź Nieruchomości"
          ></Card>
          <Card title="Sprzedaj Nieruchomość" description={Lorem} buttonDescription="Zobacz swoje możliwości"></Card>
          <Card title="Srawdź Mapę" description={Lorem} buttonDescription="Przyjżyj się dokładnie"></Card>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage