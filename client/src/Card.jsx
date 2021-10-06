import React from 'react';
//import { Card, Icon, Image } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react'
import './Card.css';

function Card(props)
{
    return(
        <div className='column'>
            <img src= {props.avatar} alt='Expert'/>
            <h3>{props.name}</h3>
            <span>{props.joined}</span>
            <p>{props.position}</p>                
            <Rating icon='star' defaultRating={3} maxRating={5} />            
        </div>
    )
}

export default Card;

/*Used with ExpertCard.jsx
const faker = require('faker');

const experts = [];
var randomCard;

function Experts ()
{
    
    for(var i = 0; i < 10; i++)
    {
        randomCard = faker.helpers.contextualCard();
        experts.push(randomCard);        

    }

}

Experts();*/