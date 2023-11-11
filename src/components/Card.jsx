import React, { forwardRef } from 'react';

import google from '../resources/googleplay.png'
import sudoku from '../resources/sudokuExample.png'

const Card = forwardRef(({ title, description, showBadge, imgSrc, showExample, inView }, ref) => {
    return (
        <div className={`Card ${inView ? ' animate' : 'invisible'}`}
            ref={ref}>
            <img src={imgSrc} alt='App logo' id='deadlift' />
            <div className='rightt'>
                <h3>{title}</h3>
                <p>{description}</p>
                {showBadge && (
                    <a href='https://play.google.com/store/apps/details?id=com.fitnessapp.deadlift'>
                        <img src={google} alt='App logo' id='google' />
                    </a>
                )}
                {showExample && <img src={sudoku} alt='Sudoku example' id='example' />}
            </div>
        </div>
    );
});


export default Card;