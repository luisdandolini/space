import { Fragment } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import './styles.scss';
import Galeria from '../../components/Galeria';
import Populares from '../../components/Populares';

export default function Home() {
  return(
    <Fragment>
      <Header />
      <main>
        <section className='first'>
          <Menu />
          <Banner />
        </section>
        <div className='galeria__home'>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}