import React from 'react';
import "./CharacterCard.css";

function CharacterCard (props) {
    return (
            <img class="card" alt={props.id} src={props.image} onClick={props.imageClick}/>
    )
}

export default CharacterCard;


{/* <div class="tile is-parent" onClick={props.imageClick}>

<img alt={props.id} src={props.image} />

    

</div> */}