import { Fragment } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import './styles.scss';
import Galeria from '../../components/Galeria';

export default function Home() {
  return(
    <Fragment>
      <Header />
      <main>
        <section className='first'>
          <Menu />
          <Banner />
        </section>
      </main>
      <div>
        <Galeria />
      </div>
      <Footer />
    </Fragment>
  )
}