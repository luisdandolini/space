import PropTypes from 'prop-types';
import Favorites from '../../../assets/favorito.png';
import Open from '../../../assets/open.png';

export default function Cards({ itens }) {
  return (
    <ul className="galeria__cards">
      {itens.map((photo) => (
        <li key={photo.id} className="galeria__card">
          <img src={photo.imagem} alt={photo.tag} className="galeria__imagem" />
          <p className="galeria__descricao">{photo.titulo}</p>
          <div>
            <p>{photo.creditos}</p>
            <span>
              <img src={Favorites} alt="ícone coração de curtir" />
              <img src={Open} alt="ícone de abrir modal" />
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

Cards.propTypes = {
  itens: PropTypes.array.isRequired,
};