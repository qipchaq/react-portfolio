import './index.scss'

const Photo = () => {
    const piecePhoto = [...Array(50)].map(() => <div class='piece'></div>)

    return (
        <div className='photo-container'>
            {piecePhoto}
            <div class="photo-text">
                <h2>Web Development Forever</h2>
            </div>
        </div>
    )
}

export default Photo