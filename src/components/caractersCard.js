import React from 'react';
import "./CharacterCard.css";

function CharacterCard (props) {
    return (
        <div class="tile is-parent" onClick={props.imageClick}>

            <img alt={props.id} src={props.image} />
         
                

        </div>
    )
}

export default CharacterCard;

{/* <div className="card" onClick={props.imageClick}>
<div className="card-image">
    <figure className="image">
        <img alt={props.id} src={props.image} />
    </figure>
</div>
</div> */}

