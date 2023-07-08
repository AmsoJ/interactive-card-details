import { useGlobalContext } from "../../globalHooks/context";

function Backcard() {
    const {formData} = useGlobalContext();
    const {cvv} = formData;
    return <div className="backcard shadow-lg position-absolute rounded-3 container p-0 d-flex align-items-center justify-content-center">

        <div className="cvv-number d-flex align-items-center justify-content-end" style={{width: "85%"}}>
            <p className="num m-0 text-white">{cvv ? cvv : "000"}</p>
        </div>

    </div>
}

export default Backcard;