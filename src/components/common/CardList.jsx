import Card from './Card';

function CardList({ list }) {

        function getName(items) {
            if(items.name && items.name.length)
            {
                return items.name;
            }else if (items.title && items.title.length)
            {
                return items.title;
            }
        }
        return (
            <ul>
                {
                    list && list.length && list.map((items, key) => {
                        return (
                            <li key={key}>
                                <Card id={key+1} nombre={getName(items)} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    
}
export default CardList;