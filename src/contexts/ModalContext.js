import React from 'react'

const ModalContext = React.createContext()

export const ModalContextProvider = (props) => {

    const formRef = React.useRef();

    const openFormHandler = () => {
      formRef.current.openForm()
    };

    const closeFormHandler = () => {
        formRef.current.closeForm()
    }

    return(
        <ModalContext.Provider value={{openFormHandler, closeFormHandler, formRef}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContext