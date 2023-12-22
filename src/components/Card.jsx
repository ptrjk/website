import React, { forwardRef } from 'react';

import google from '../resources/googleplay.png'


const Card = forwardRef(({ title, description, showBadge, imgSrc, exampleSrc, inView, year, listOfLanguages, link }, ref) => {
    return (
        <div className={`Column ${inView ? ' animate' : 'invisible'}`}>
            <div className='Card'
                ref={ref}>
                <img src={imgSrc} alt='App logo' id='deadlift' />
                <div className='rightt'>
                    <div className="cardRow">
                        <h3>{title}</h3> {year && <p>{year}</p>}
                    </div>
                    <p>{description}</p>
                    {link && (
                        <a id='link' href='https://ptrjk.github.io/ux/' >Link
                        </a>
                    )}
                    {exampleSrc && <img src={exampleSrc} alt='Sudoku example' id='example' />}
                    {showBadge && (
                        <a href='https://play.google.com/store/apps/details?id=com.fitnessapp.deadlift'>
                            <img src={google} alt='App logo' id='google' />
                        </a>
                    )}

                </div>
            </div>
            <div className='langRow'>
                {listOfLanguages && listOfLanguages.map((curr, index) => {
                    let clr = 'blue';
                    switch (curr) {
                        case 'Java':
                            clr = 'green';
                            break;
                        case 'Java Spring':
                            clr = 'green2';
                            break;
                        case 'Flutter':
                            clr = 'lightBlue';
                            break;
                        case 'SQL':
                            clr = 'orange';
                            break;
                        case 'HTML':
                            clr = 'red';
                            break;
                        case 'CSS':
                            clr = 'lightBlue';
                            break;
                        case 'Python':
                            clr = 'yellow';
                            break;
                        default:
                            break;
                    }
                    return (
                        <p className={`langTag ${clr}`} key={index} > {curr}</p>
                    )
                })}
            </div>
        </div >

    );
});


export default Card;