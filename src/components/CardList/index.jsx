import Card from '../Card';
import './index.css';

function CardList({ list }) {

        return (
            <ul className="card-list">
                {
                    list && list.length && list.map((item, key) => {
                        return (
                            <li key={key}>
                                <Card id={key+1} nombre={item.name ?? item.title} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    
}
export default CardList;