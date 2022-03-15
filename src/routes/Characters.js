import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import getCharData from '../utils/data';

export default function Characters() {
    const ENDPOINT = 'Characters';
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      let data = getLocalStorage(ENDPOINT);
      if (data.length > 0) {
        setCharacters(data);
      } else {
        getCharData(ENDPOINT)
        .then((data) => {
            setCharacters(data);
            setLocalStorage(ENDPOINT, data);
        })
      }
    }, []);

    return (
        <main style={{padding: "1rem 0"}}>
            <div className='container'>
                <div className='row justify-content-center text-center'>
                    <h2 className='mb-4'>Characters</h2>
                    <table className='table tble-hover' style={{ maxwidth: '600px'}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Species</th>
                                <th>House</th>
                            </tr>
                        </thead>
                        <tbody>
                            {characters.map((character) => <Character key={character.id} character={character} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )

}

const Character = ({character}) => {
    return (
        <tr>
            <td>{character.name}</td>
            <td>{character.species}</td>
            <td>{character.house}</td>
        </tr>
    )
}