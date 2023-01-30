import React from "react"
import './Card.css';
import People from '../../images/people.svg';
import Like from '../../images/like.svg';
import Clock from '../../images/clock.svg';



export default function Card(props) {
  
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={props.img} alt="" />
            </div>
            <div className='card-title'>
                <h3>{props.title}</h3>
            </div>
            { (props.time || props.servings || props.like) &&
                <div className='card-info'>
                    <div className='card-info-1'>
                        {props.time &&
                            <div className='info clock'>
                                <img src={Clock} alt="" />
                                <h6>{props.time}</h6>
                            </div>
                        }
                        {props.servings &&
                            <div className='info'>
                                <img src={People} alt="" />
                                <h6>{props.servings}</h6>
                            </div>
                        }

                        {props.like &&
                            <div className='info'>
                                <img src={Like} alt="" />
                                <h6>{props.like}</h6>
                            </div>
                        }
                    </div>
                </div>
            }
            
        </div>
    )
  
}

