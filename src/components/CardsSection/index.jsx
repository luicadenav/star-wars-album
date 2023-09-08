import { useContext } from 'react';
import CardList from '../CardList';
import AlbumContext from '../../contexts/albumContext';
import "./index.css"

function CardsSection({ title }) {
    const context = useContext(AlbumContext);

    return (
        <section className='card-section'>
            <h3>{title}</h3>
            <CardList list={context[title]} />
        </section>
    );
}

export default CardsSection;