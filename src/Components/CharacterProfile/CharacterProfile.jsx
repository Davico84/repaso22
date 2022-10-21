import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacterProfile = () => {
    const [char, setChar] = useState({});

    const { charId } = useParams();

    console.log(charId);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${charId}/`)
        .then(res =>{
            console.log(res.data);
            setChar(res.data)
        })

        return ()=>{
            console.log('Y se marcho.....');
        }
    }, []);

    return(
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{char.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default CharacterProfile;