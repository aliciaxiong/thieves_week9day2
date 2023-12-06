import "./Players.css"
import { useState } from "react"
import { SlLike } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";


const Players = () => {

    const [player, setPlayer] = useState({
        name: "Brock Purdy",
        team: "49ners",
        number: 13,
        position: "QB"
    });

    const [count, setLikes] = useState(0);

       const handleClick = () => {
        setPlayer({
            name: "Dak Prescott",
            team: "Cowboys",
            number: 4,
            position: "QB"
        })
    }

    const handleSwitchback = () => {
        setPlayer({
            name: "Brock Purdy",
            team: "49ners",
            number: 13,
            position: "QB"
        });
        setLikes(0);
    }

    const handleLike = () => {
        setLikes(count + 1);
    };

    const handleDislike = () => {
        setLikes(count - 1);
    }

  return (
<>
    <header>
        <h1>2023 NFL MVP</h1>
    </header>
    <body>
        <div>
            <table>
                <tr>
                    <div>
                        <th>Player: {player.name} </th>
                    </div>
                    <div>
                        <th>Team: {player.team} </th>
                    </div>
                    <div>
                        <th>Number: {player.number}</th>
                    </div>
                    <div>
                        <th>Position: {player.position} </th>
                    </div>
                    <div>
                        <th><SlLike />: {count} </th>
                        </div>
                    <div>
                        <th>
                            <button onClick={handleLike}> <FcLike /> </button>
                            <button onClick={handleDislike}> <FcDislike /> </button>
                        </th>

                        <th>
                            <button onClick={handleClick}> Change Player </button>
                            <button onClick={handleSwitchback}> Switch Back </button>
                        </th>
                    </div>
                </tr>

                
            </table>
        </div>
    </body>

</>
    
  )
}

export default Players