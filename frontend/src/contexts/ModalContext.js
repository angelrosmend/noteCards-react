import React,{useImperativeHandle, useState, useRef} from 'react'

const ModalContext = React.createContext()

export const ModalContextProvider = (props) => {

    const [display, setDisplay] = useState(false);   
    const open = () =>  setDisplay(true)
    const close = () => setDisplay(false)

    const portalRef = useRef();
    useImperativeHandle(portalRef, () => {
        return {
          openPortal: () => open(),
          closePortal: () => close()
        }
      })

    const openFormHandler = () => {
      portalRef.current.openPortal()
    };

    const closeFormHandler = () => {
        portalRef.current.closePortal()
    }

    return(
        <ModalContext.Provider value={{display,openFormHandler, closeFormHandler, portalRef}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContext