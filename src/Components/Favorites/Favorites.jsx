import React from "react";
import { Link } from "react-router-dom";

const Favorites = ({favoriteList, rmFromFavorites}) => {

    console.log("DELCOMP", favoriteList);
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
                {favoriteList.map((char, i) =>{
                    const id = char.url.split('/')[5];
                    return(
                        <tr key={i}>
                            <th scope="row">
                                <button onClick={()=>{rmFromFavorites(char.url)}}>Remove</button>
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

export default Favorites;