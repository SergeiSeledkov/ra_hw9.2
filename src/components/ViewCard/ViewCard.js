import { useState, useContext } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import CardElement from '../CardElement/CardElement';
import CardsContext from '../CardsContext/CardsContext';

export default function ViewCard() {
    const params = useParams();
    const { cards } = useContext(CardsContext);
    const [redirect, setRedirect] = useState(false);

    const card = cards.find((item) => item.id === parseInt(params.id));

    const handleDelete = (event) => {
        event.preventDefault();
        fetch(`http://localhost:7070/posts/${card.id}`, {method: 'DELETE'})
        .then(() => setRedirect(true));
    }

    return (
        <div className="card" style={{width:500}}>
			<CardElement card={card}>
				<div>
					<Link to={`/card/edit/${card.id}`}>
						<button  className="btn btn-warning">Изменить</button>
					</Link>
					<button className="btn btn-danger" onClick={handleDelete}>Удалить</button>
				</div>
			</CardElement>
			{redirect && <Navigate to='/' />}
		</div>
    )
}