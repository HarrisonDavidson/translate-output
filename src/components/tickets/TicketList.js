import { useEffect, useState } from "react"

export const TicketList = () => {
    const [names, setNames] = useState([])
    const [enemies, setEnemies] = useState([])

    useEffect(
        () => {
            fetch (`http://localhost:8088/names`)
            .then(response => response.json())
            .then((namesArray) => {
                setNames(namesArray)
            })
        },
        []
    )

    useEffect(
        () => {
            fetch (`http://localhost:8088/enemies`)
            .then(response => response.json())
            .then((enemiesArray) => {
                setEnemies(enemiesArray)
            })
        },
        []
    )



    const theNames = names.filter(names => names.startsWith("The"));

    return (
        <>
        <div>
          <h1>'The' Place Names</h1>
          {theNames.map((name, index) => (
            <p key={index}>{name}</p>
          ))}
        </div>

    <div>
    <h1>Enemies List</h1>
    {enemies.map((enemy, index) => (
      <div key={index}>
        <h2>{`${enemy.FirstName} ${enemy.LastName}`}</h2>
        <ul>
          {enemy.Offenses.map((offense, offenseIndex) => (
            <li key={offenseIndex}>{offense}</li>
          ))}
        </ul>
        {enemy.IsReallyHated && <p>Really, Really dislike</p>}
      </div>
    ))}
  </div>

</>
      );
    };