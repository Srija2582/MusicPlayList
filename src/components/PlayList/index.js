import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlayList = props => {
  const {each, onDeleteButton} = props
  const {id, imageUrl, name, genre, duration} = each

  const onClickButton = () => {
    onDeleteButton(id)
  }

  return (
    <li className="list-item">
      <div className="image-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-card">
          <p>{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="image-container">
        <p>{duration}</p>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onClickButton}
        >
          <AiOutlineDelete fill="white" />
        </button>
      </div>
    </li>
  )
}
export default PlayList
