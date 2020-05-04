import React, {useContext} from 'react';
import Context from '../context/context';
import Smurf from './Smurf';

export default function Card() {

    const smurfs = useContext(Context);
    console.log("card", smurfs);
    return (
        <div>
            {smurfs.smurf.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
        </div>
    )

}