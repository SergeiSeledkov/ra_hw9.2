import { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import CardList from "../CardList/CardList";
import CardsContext from "../CardsContext/CardsContext";
import './Home.css';

export default function Home() {
    const { cards, handleChange } = useContext(CardsContext);

    useEffect(() => {
        fetch("http://localhost:7070/posts")
        .then((response) => response.json())
        .then((data) => handleChange(data))
    }, [])

    return (
        <div className="container">
			<div className="card">
                <div className="card-body">
					<Link to="card/new">
                         <button className="create-post btn btn-outline-secondary" type="button">Создать пост</button>
					</Link>
				</div>
			</div>
            {cards &&<CardList />}
        </div>
    )
}
