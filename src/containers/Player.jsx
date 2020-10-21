import React from 'react'
import '../assets/styles/components/Player.scss'

const Player = props => {
    return(
        <div className="player">
            <video autoPlay controls>
                <source src="/player/:id" type="video/mp4"/>
            </video>
            <div className="player-back">
                <button type="button" onClick={()=> {
                    props.history.goBack()
                }}>Regresar</button>
            </div>
        </div>
    )
}

export default Player