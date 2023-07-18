import { Fragment } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Banner from '../../assets/banner.png';
import './styles.scss';

export default function Home() {
  return(
    <Fragment>
      <Header />
      <main>
        <section className='first'>
          <Menu />
          <div className='first__image'>
            <h1>A galeria mais completa do espaço</h1>
            <img src={Banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
      </main>
    </Fragment>
  )
}