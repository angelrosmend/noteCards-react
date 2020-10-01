import React from 'react'

const ModalContext = React.createContext()

export const ModalContextProvider = (props) => {

    const formRef = React.useRef();

    const openFormHandler = () => {
      formRef.current.openForm()
    };

    return(
        <ModalContext.Provider value={{openFormHandler, formRef}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContext