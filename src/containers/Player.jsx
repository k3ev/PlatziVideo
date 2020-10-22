import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NotFound from './NotFound'
import '../assets/styles/components/Player.scss'
import { getVideoSource } from '../actions'

const Player = props => {
    const { id } = props.match.params
    const isPlaying = Object.keys(props.playing).length > 0
    useLayoutEffect(() => {
        props.getVideoSource(id)
    }, [])
    return isPlaying ? (
        <div className="player">
            <video autoPlay controls>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="player-back">
                <button type="button" onClick={()=> {
                    props.history.goBack()
                }}>Regresar</button>
            </div>
        </div>
    ):
        <NotFound />
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)