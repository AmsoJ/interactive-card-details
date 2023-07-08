import './form.scss';
import { useGlobalContext } from '../../globalHooks/context';

function Form() {
    const {formData, updateFormInfo, validateForm} = useGlobalContext();
    // destructuring
    const {name, number, month, year, cvv} = formData;

    return <form action="" className="my-form pt-5 pt-md-0" onSubmit={e => validateForm(e)}>
        {/* card owner name */}
        <label htmlFor="name" className="text-uppercase">
            cardholder name
            <input 
                type="text"
                name="name"
                id="name"
                placeholder="e.g. Jane Appleseed"
                value={name}
                onChange={e => updateFormInfo(e)}
            />
            <span className="badge p-1 alert text-capitalize">jsoe</span>
        </label>
        {/* card number */}
        <label htmlFor="number" className="text-uppercase">
            card number
            <input 
                type="text"
                name="number"
                id="number"
                placeholder="e.g. 1234 5678 9123 0000"
                value={number}
                onChange={e => updateFormInfo(e)}
                maxLength="19"
            />
            <span className="badge p-1 alert text-capitalize">jsoe</span>
        </label>
        {/* expiration date input */}
        <div className="expiration-cvv d-flex">
            <label className="text-uppercase">
                exp.date(mm/yy)
                <div className="row">
                    <div className="month col-6">
                        <input 
                            type="text"
                            name="month"
                            id="month"
                            placeholder="MM"
                            className='text-center'
                            value={month}
                            onChange={e => updateFormInfo(e)}
                            maxLength="2"
                        />
                        <span className="badge p-1 alert text-capitalize">jsoe</span>
                    </div>

                    <div className="year col-6">
                        <input 
                            type="text"
                            name="year"
                            id="year"
                            placeholder="YY"
                            className='text-center'
                            value={year}
                            onChange={e => updateFormInfo(e)}
                            maxLength="2"
                        />
                        <span className="badge p-1 alert text-capitalize d-none">jsoe</span>
                    </div>
                </div>
            </label>

            <label htmlFor="cvv" className="text-uppercase">
                cvv
                <input 
                    type="text" 
                    name="cvv"
                    id="cvv"
                    placeholder="eg. 123"
                    value={cvv}
                    onChange={e => updateFormInfo(e)}
                    maxLength="3"
                />
                <span className="badge p-1 alert text-capitalize">jsoe</span>
            </label>
        </div>

        <button className='submit text-white text-center btn text-uppercase'>
            confirm
        </button>
    </form>
}

export default Form;