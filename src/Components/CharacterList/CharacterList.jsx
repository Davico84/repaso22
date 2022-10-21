import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addToFav } from '../../Actions'

const CharacterList = () => {
    //ESTADO GLOBAL
    const charListState = useSelector(state => state.characterList);

    const dispatch = useDispatch()

    console.log("DELCOMP", charListState);
    return(
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Birthday</th>
                <th scope="col">Eye Color</th>
                </tr>
            </thead>
            <tbody>
                {/* MAPEO AQUI */}
                {charListState.map(char =>{
                    const id = char.url.split('/')[5];
                    return(
                        <tr key={id}>
                            <th scope="row">
                                <button onClick={()=>dispatch(addToFav(char))}>Fav</button>
                            </th>
                            <td>
                                <Link to={`/character/${id}`}>
                                    {char.name}
                                </Link>
                            </td>
                            <td>{char.gender}</td>
                            <td>{char.birth_year}</td>
                            <td>{char.eye_color}</td>
                        </tr>
                        )
                }
                )}
            </tbody>
        </table>
    )
}

export default CharacterList;