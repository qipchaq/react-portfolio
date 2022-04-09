import './index.scss'
import picture from '../../../assets/images/my-photo.jpeg'

const Photo = () => {
    return (
        <figure class="photo"><img src={picture} alt="photo" />
            <div class="border one">
                <div></div>
            </div>
            <div class="border two">
                <div></div>
            </div>
        </figure>
    )
}

export default Photo