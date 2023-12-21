import React, { forwardRef } from 'react';

import google from '../resources/googleplay.png'


const Card = forwardRef(({ title, description, showBadge, imgSrc, exampleSrc, inView, year }, ref) => {
    return (
        <div className={`Card ${inView ? ' animate' : 'invisible'}`}
            ref={ref}>
            <img src={imgSrc} alt='App logo' id='deadlift' />
            <div className='rightt'>
                <div className="cardRow">
                    <h3>{title}</h3> {year && <p>{year}</p>}
                </div>
                <p>{description}</p>
                {showBadge && (
                    <a href='https://play.google.com/store/apps/details?id=com.fitnessapp.deadlift'>
                        <img src={google} alt='App logo' id='google' />
                    </a>
                )}
                {exampleSrc && <img src={exampleSrc} alt='Sudoku example' id='example' />}
            </div>
        </div>
    );
});


export default Card;