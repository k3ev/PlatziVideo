import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import playButton from '../assets/static/play-icon.png'
import plusButton from '../assets/static/plus-icon.png'
import removeButton from '../assets/static/remove-icon.png'
import { setFavorite,deleteFavorite } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const CarouselItem = (props) => {
  const {id, cover, title, year, duration, contentRating, isList} = props
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, duration, contentRating
    })
  }
  const handleDeleteFavorite = () => {
    props.deleteFavorite(id)
  }
  return(
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <Link to={`/player/${id}`}>
              <img className="carousel-item__details--img" src={playButton} alt="Play Icon"/>
            </Link>
            {isList ?
                <img
                  className="carousel-item__details--img"
                  src={removeButton}
                  alt="Remove Icon"
                  onClick={() => handleDeleteFavorite(id)}
                /> :
                  <img
                    className="carousel-item__details--img"
                    src={plusButton}
                    alt="Plus Icon"
                    onClick={handleSetFavorite}
                  />
              }
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} years ${duration} minutes`}
          </p>
        </div>
    </div>
  )
}

const mapDispatcherToState = {
  setFavorite,
  deleteFavorite
}

export default connect(null,mapDispatcherToState)(CarouselItem)