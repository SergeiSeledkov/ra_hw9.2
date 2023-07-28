import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CardsContext from '../CardsContext/CardsContext';
import CardElement from '../CardElement/CardElement';

export default function CardList() {
    const { cards } = useContext(CardsContext);

    return (
        <div>
            { cards.map((item) => <Link to={`/card/${item.id}`} key={item.id}><CardElement card={item} /></Link>)}
        </div>
    )
}