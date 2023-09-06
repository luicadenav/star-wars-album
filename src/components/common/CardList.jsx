import Card from './Card';

function CardList({ list }) {
        return (
            <ul>
                {
                    list && list.length && list.map((items, key) => {
                        return (
                            <li key={key}>
                                <Card id={items.id} nombre={items.nombre} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    
}
export default CardList;