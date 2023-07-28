import moment from 'moment';
import 'moment/locale/ru';
import './CardElement.css';

export default function CardElement(props) {
    const { card } = props;

    return (
    <div className="card">
        <div className="row">
            <div className="col">
                <p className="user-name">Автор: Я</p>
                <p>{moment(card.created).fromNow()}</p>
            </div>
            <div className='card-content'><p>{card.content}</p></div>
            {props.children}
        </div>   
    </div>
    )
}