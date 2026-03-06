
import {useEffect, useState } from 'react';

function ScoreBoard () {

    const [score, setScore] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/scoreBoard")
        .then(res => res.json())
        .then(data => setScore(data));
    }, []);

    return (
         <div className='scoreBoard'>
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>BEST TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {score.map((score) => {
                        return (
                            <tr key={score.id}>
                                <td>{score.name}</td>
                                <td>{score.seconds}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                  
                </table>
              
              </div>
    )
}

export default ScoreBoard;