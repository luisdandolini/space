import './styles.scss';
import Inicio from '../../assets/icones/home-ativo.png';
import Curtidas from '../../assets/icones/mais-curtidas-inativo.png';
import MaisVistas from '../../assets/icones/mais-vistas-inativo.png';
import Novas from '../../assets/icones/novas-inativo.png';
import Surpreenda from '../../assets/icones/surpreenda-me-inativo.png';

export default function Menu() {
  return(
    <nav className='menu'>
      <ul className='menu__lista'>
        <li className='menu__item'>
          <img src={Inicio} alt="" />
          <a href="/">Início</a>
        </li>
        <li className='menu__item'>
          <img src={Curtidas} alt="" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className='menu__item'>
          <img src={MaisVistas} alt="" />
          <a href="/">Mais vistas</a>
        </li >
        <li className='menu__item'>
          <img src={Novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className='menu__item'>  
          <img src={Surpreenda} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}