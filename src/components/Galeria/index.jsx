import Tags from "../Tags";
import Cards from "./Cards";
import './styles.scss';
import photos from './photos.json';
import { useState } from "react";

export default function Galeria() {
  const [itens, setItens] = useState(photos);
  const tags = [...new Set(photos.map((value) => value.tag))];

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag
    });
    
    setItens(newPhotos);
  }

  return(
    <section className="galeria">
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filterPhotos={filterPhotos} />
      <Cards itens={itens}/>
    </section>
  )
}