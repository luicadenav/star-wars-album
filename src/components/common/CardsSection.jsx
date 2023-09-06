import CardList from './CardList';

function CardsSection({ list, title }) {
        return (
            <section>
                <h3>{title}</h3>
                <CardList list={list} />
            </section>
        );
    
}
export default CardsSection;