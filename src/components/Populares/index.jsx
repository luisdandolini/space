import './styles.scss';
import fotosPopulares from './photos-populares.json';

export default function Populares() {
  return (
    <aside className='populares'>
      <h2>Populares</h2>
      <ul className='populares__imagens'>
        {fotosPopulares.map((foto) => (
          <li key={foto.id}>
            <img src={foto.path} alt={foto.alt} />
          </li>
        ))}
      </ul>
    </aside>
  )
}
