import React from "react";

const CharacterList = ({characterList}) => {

    console.log("DELCOMP", characterList);
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
                {characterList.map(char =>
                        <tr key={char.url.split('/')[5]}>
                            <th scope="row">{char.url.split('/')[5]}</th>
                            <td>{char.name}</td>
                            <td>{char.gender}</td>
                            <td>{char.birth_year}</td>
                            <td>{char.eye_color}</td>
                        </tr>
                )}
            </tbody>
        </table>
    )
}

export default CharacterList;