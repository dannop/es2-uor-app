import React from 'react'

import './style.scss';

export default function PlayerInfo(props: any) {
    const { playerColor, playerName, currentRoundName, teamTotal } = props;

    return (
        <div className="player-info-container">
            <p className="player-name">{playerName}</p>
            <div className="current-player-box">
                <div className="player-box-container">
                    <div className="player-box-stages"></div>
                    <p className="current-round">{currentRoundName}</p>
                </div>
                <div className="absolute-circle circle-left">
                    
                </div>
                <div className="absolute-circle circle-right">
                    <h1>X{teamTotal}</h1>
                </div>
            </div>
        </div>
    )
}
