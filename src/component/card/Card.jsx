import Backcard from './Backcard';
import Frontcard from './Frontcard';
import './card.scss';

function Card() {
    return  <section className="card col-12 col-md-4 rounded-0 position-relative p-0">
        <Backcard />
        <Frontcard />
    </section>
}

export default Card;