import {createContext, useContext, useState} from "react";

// create app context
const AppContext = createContext();


// create an app provider
const AppProvider = ({children}) => {

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        month: "",
        year: "",
        cvv: ""
    })

    const updateFormInfo = (e) => {
        let {id, value} = e.currentTarget;

        
        
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [id] : value
            }
        })
        
        // if(id === "number") {
        //     if((value.length === 4 || value.length  === 9) || (value.length === 14)) {
        //         // value += " ";
        //         setFormData(prevFormData => {
        //             return {
        //                 ...prevFormData,
        //                 [id] : value + " "
        //             }
        //         })
        //         console.log("added");
        //     }
        // }

    }

    const alarm = (alertParam, message, condition) => {
        alertParam.classList.add("show", condition);
        alertParam.textContent = message;
        setTimeout(() => {
            alertParam.classList.remove("show", condition);
            // alertParam.textContent = "";
        }, 3000);
    }

    const validateForm = (e) => {
        e.preventDefault();
        const allInputs = [...document.querySelectorAll("input")];
        allInputs.forEach(eachInput => {
            let alert = eachInput.parentElement.querySelector(".alert");
            let identity = eachInput.name;
            let value = eachInput.value;
            let regex;
            if(eachInput.value) {
                switch (identity) {
                    case "name": 
                        regex = /\w+\s\w+/;
                        break;
                    case "number":
                        regex = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
                        break;
                    case "month":
                    case "year":
                        regex = /\d{2}/;
                        break;
                    case "cvv":
                        regex = /\d{3}/;
                        break;
                    default: 
                        console.log("no errors");
                }

                if(!regex.test(value)) {
                    switch (identity) {
                        case "name": 
                            alarm(alert, "incorrect format, first and last name", "danger");
                            break;
                        case "number":
                            alarm(alert, "incorrect format, numbers only", "danger")
                            break;
                        case "month":
                        case "year":
                            alarm(alert, "incorrect date (numbers only)", "danger");
                            break;
                        case "cvv":
                            alarm(alert, "numbers only", "danger");
                            break;
                        default: 
                            console.log("no errors");
                    }
                    eachInput.classList.add("danger");
                    setTimeout(() => {
                        eachInput.classList.remove("danger");
                    }, 3000);
                }else {
                    alarm(alert, "correct format", "success");
                }
            }else {
                // console.log(identity);
                alarm(alert, "can't be blank", "danger");
                eachInput.classList.add("danger");
                    setTimeout(() => {
                        eachInput.classList.remove("danger");
                    }, 3000);
            }
        })
    }


    return <AppContext.Provider value={{
        formData,
        updateFormInfo,
        validateForm
    }}
        >
            {children}
        </AppContext.Provider>
}



// create customized hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {useGlobalContext, AppProvider};