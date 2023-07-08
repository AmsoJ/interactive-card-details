import Confirm from './Confirm';
import Form from './Form';
import './formcontainer.scss';

function FormContainer() {
    return <section className="my-form-container col-12 col-md-8 py-5 d-md-flex align-items-center justify-content-center">
        <Form />
        <Confirm />
    </section>
}

export default FormContainer;