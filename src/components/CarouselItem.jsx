import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import playButton from '../assets/static/play-icon.png'
import plusButton from '../assets/static/plus-icon.png'


const CarouselItem = ({title, cover, year, duration, contentRating}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playButton} alt="Play Icon"/> 
            <img className="carousel-item__details--img" src={plusButton} alt="Plus Icon"/> 
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} years ${duration} minutes`}
          </p>
        </div>
    </div>
)

export default CarouselItem