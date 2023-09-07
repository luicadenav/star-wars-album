import { useContext } from 'react';
import CardList from './CardList';
import AlbumContext from '../contexts/albumContext';

function CardsSection({ title }) {
    const context = useContext(AlbumContext);

    return (
        <section>
            <h3>{title}</h3>
            <CardList list={context[title]} />
        </section>
    );
}

export default CardsSection;