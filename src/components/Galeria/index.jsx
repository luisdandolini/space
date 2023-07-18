import Tags from "../Tags";
import Cards from "./Cards";
import './styles.scss';
import photos from './photos.json';

export default function Galeria() {
  return(
    <section className="galeria">
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards itens={photos}/>
    </section>
  )
}