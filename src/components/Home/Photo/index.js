import './index.scss'
import picture from '../../../assets/images/my-photo.jpeg'

const Photo = () => {
  return (
    <figure className="photo">
      <img src={picture} alt="" />
      <div className="border one">
        <div></div>
      </div>
      <div className="border two">
        <div></div>
      </div>
    </figure>
  )
}

export default Photo
