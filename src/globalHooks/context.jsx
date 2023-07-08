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
        const {id, value} = e.currentTarget;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [id] : value
            }
        })
    }


    return <AppContext.Provider value={{
        formData,
        updateFormInfo
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