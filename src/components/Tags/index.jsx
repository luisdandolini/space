import './styles.scss';

export default function Tags({ tags, filterPhotos }) {
  return (
    <div className='tags'>
      <p>Filtre por tags:</p>
      <ul className='tags__lista'>
        {tags.map((tag) => (
          <li key={tag} onClick={() => filterPhotos(tag)}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}
