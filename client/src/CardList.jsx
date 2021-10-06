import React from 'react';
import Card from './Card';
import './index.css';
import './Card.css';
import expertList from './ExpertList';

function  populateCards(expert, index)
{
    return <Card
    avatar = {expert.avatar}
    name = {expert.name}
    position = {expert.position}
    >
    </Card>
}
function CardList()
{
    return(
        <div className='row container'>
            {expertList.map(populateCards)}            
            
        </div>
        
    )
}
export default CardList;