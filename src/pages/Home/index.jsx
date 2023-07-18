import { Fragment } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Banner from '../../components/Banner';
import './styles.scss';

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
    </Fragment>
  )
}