import { useGlobalContext } from "../../globalHooks/context";

function Frontcard() {
    const {formData} = useGlobalContext();

    const {name, number, month, year} = formData;

    return <div className="frontcard shadow-lg position-absolute rounded-3 container p-3">
        <header className="card-head">
            <svg className="logo" width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
        </header>

        <article className="card-body mt-4">
            <p className="card-number text-center text-white">{number ? number : "0000 0000 0000 0000"}</p>
            <section className="owner text-white d-flex align-item-center justify-content-between">
                <p className="owner-name text-uppercase">{name ? name : "Jane Appleseed"}</p>
                <p className="expiration">
                    <span className="month">{month ? month : "00"}</span> / <span className="year">{year ? year : "00"}</span>
                </p>
            </section>
        </article>
    </div>
}
export default Frontcard;