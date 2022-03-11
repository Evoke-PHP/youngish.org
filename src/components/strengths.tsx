import React, {useState} from "react"
import imgLike from '../img/heart.svg'
import imgSkill from '../img/light-globe.svg'
import '../style/strengths.css';

export type Strength = {
    desire: number,
    proficiency: number,
    skill: string
};

export const Strengths = ({strengths}: { strengths: Strength[] }): JSX.Element => {
    const [order, setOrder] = useState('Like');

    return (
        <div className="strengths">
            <button onClick={() => setOrder('Like')}>
                <img alt="Like" className="order" src={imgLike} />
                Things I like
            </button>
            <button onClick={() => setOrder('Skilled')}>
                <img alt="Skilled" className="order" src={imgSkill} />
                Things I am skilled at
            </button>
            <ul>
                {
                    (
                        order === 'Like' ?
                            strengths
                                .sort(
                                    (a, b) => a.desire - b.desire
                                ) :
                            strengths.sort(
                                (a, b) => a.proficiency - b.proficiency
                            )
                    )
                        .map((strength: Strength) => <li>{strength.skill}</li>)
                }
            </ul>
        </div>
    );

};