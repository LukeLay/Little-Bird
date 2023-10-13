import React from "react";
import {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Monsters = () => {

    const [monsters, setMonsters] = useState([]);

    useEffect(() => {

        //Fetch data from JSON file
        fetch("public/data/5e-SRD-Monsters.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            setMonsters(data.sort(sortByChallengeRating).reverse());
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    }, []);

    useEffect(() => {
        //console.log(monsters);
    }, [monsters]);

    const sortByChallengeRating = (a, b) => {
        return a.challenge_rating - b.challenge_rating;
    }

    return ( 
        <>
            <table className="table table-hover">
                <thead className="table-primary">
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Challenge Rating</th>
                        <th>Armor Class</th>
                        <th>Hit Points</th>
                        <th>Constitution</th>
                        <th>Strength</th>
                        <th>Dexterity</th>
                        <th>Intelligence</th>
                        <th>Wisdom</th>
                        <th>Charisma</th>
                    </tr>
                </thead>

                <tbody>
                    {monsters.map((monster, index) => (
                        <tr key={index} className={index % 2 == 0 ? "table-dark": "table-secondary"}>
                            <td>{index + 1}</td>
                            <td>{monster.name}</td>
                            <td>{monster.challenge_rating}</td>
                            <td>{monster.armor_class[0].value}</td>
                            <td>{monster.hit_points}</td>
                            <td>{monster.constitution}</td>
                            <td>{monster.strength}</td>
                            <td>{monster.dexterity}</td>
                            <td>{monster.intelligence}</td>
                            <td>{monster.wisdom}</td>
                            <td>{monster.charisma}</td>                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

     );
}
 
export default Monsters;