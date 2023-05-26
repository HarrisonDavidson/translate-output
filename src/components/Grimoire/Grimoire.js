import { useEffect, useState } from "react"

export const Grimoire = () => {
    const [spells, setSpells] = useState([])

    useEffect(
        () => {
            fetch (`http://localhost:8088/spells`)
            .then(response => response.json())
            .then((spellsArray) => {
                setSpells(spellsArray)
            })
        },
        []
    )

return (
    <>
    <div>
      <h1>Spells</h1>
      {spells.map((spells, index) => (
        <p key={index}>
            <h2>{`${spells.Spellname}`}</h2>
            <li>
                {spells.ManaCost}
            </li>
            {spells.IsEvil && <p> Unethical</p>}
            </p>
      ))}
    </div>
</>
  );
};