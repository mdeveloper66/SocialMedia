import React from 'react';
import './TrendCard.css';
import { TrendData } from '../../data/TrendData';

function TrendCard() {
    return (
        <div className="TrendCard">
            <h3>Trends for you</h3>
            {TrendData.map((trend, index) => (
                <div key={index} className='trend'>
                    <span>#{trend.name} </span>
                    <span>{trend.shares}k shares</span>
                </div>
            ))}
        </div>
    )
}

export default TrendCard