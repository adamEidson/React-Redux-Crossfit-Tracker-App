import React, { Component } from 'react';
import PropType from 'prop-types';


export default function WodsList({ wods })  {
    const emptyMessage = (
        <p> There are no wods at the moment </p>
    );
    const wodsList = (
        <p> Wods List </p>
    );

    return(
        <div>
            {wods.length === 0 ? emptyMessage : wodsList}
        </div>
    );
}

WodsList.propTypes = {
    wods: React.PropTypes.array.isRequired
}