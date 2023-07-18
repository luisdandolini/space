import './styles.scss';
import Logo from '../../assets/logo.png';
import Icone from '../../assets/search.png';

export default function Header() {
  return(
    <header className='header'>
      <img src={Logo} alt="Logo Alura Space" />
      <div className='header__container'>
        <input type="text" placeholder="O que você procura?" className='header__input' />
        <img src={Icone} alt="Ícone de lupa" />
      </div>
    </header>
  )
}