import React, {Fragment} from "react";
import { Component } from "react";
const Card = (props) => {
    return(
        <div className="bg-blue dib br3 pa3 ma3 bb grow">
            <img src= {`https://robohash.org/${props.usern}?10x10`} alt="robot" />
            <div>
                <h2 className="tc avenir">{ props.named }</h2>
                <p className="tc helvetica">{ props.em }</p>
            </div>
        </div>
    )
}
export default Card;