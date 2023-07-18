import './styles.scss';
import BannerFirst from '../../assets/banner.png';

export default function Banner() {
  return(
    <div className='first__image'>
      <h1>A galeria mais completa do espaço</h1>
      <img src={BannerFirst} alt="A imagem da terra vista do espaço" />
    </div>
  )
}