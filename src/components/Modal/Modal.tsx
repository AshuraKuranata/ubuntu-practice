import { useState } from "react"
import "../../styles/style.scss"
type ModalProps = {
    openModal: string
    title: string
    description: string
    
}

const Modal = ({openModal, title, description}: ModalProps) => {
    const [modalVis, setModalVis] = useState(false)

    const toggleModal = () => {
        if (modalVis === false) {
            document.getElementById('modal')?.classList.add('p-modal')
        } else {
            document.getElementById('modal')?.classList.remove('p-modal')
        }
        setModalVis(prev => !prev)
    }

    return(
        <>
            <div style={{justifySelf: 'center'}}>
                <button className="p-button--positive" id="showModal" aria-controls="modal" onClick={toggleModal}>{openModal}</button>
            </div>
            
            <div className={`${modalVis ? "p-modal is-active": "p-modal__close"}`} id="modal">
                <section className="p-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
                    <header className="p-modal__header">
                        <h2 className="p-modal__title" id="modal-title">{title}</h2>
                        <button className="p-modal__close" aria-label="Close active modal" aria-controls="modal" onClick={toggleModal}>Close</button>
                    </header>
                    <p id="modal-description">{description}</p>
                    <div className="p-heading-icon--small">
                        <div className="p-heading-icon__header">
                            <img className="p-heading-icon__img" src="https://assets.ubuntu.com/v1/b81a45e4-kubernetes.svg" alt="" />
                            <p><a className="p-heading-icon__title" href="#tutorial/get-started-canonical-kubernetes">Kubernetes tutorial</a></p>
                        </div>
                    <div className="p-heading-icon__header">
                        <img className="p-heading-icon__img" src="https://assets.ubuntu.com/v1/5e3456e3-hadoop.svg" alt="" />
                        <p><a className="p-heading-icon__title" href="#tutorial/get-started-hadoop-spark">Hadoop Spark tutorial</a></p>
                    </div>
                    </div>
                </section>
            </div>
        </>
    )
} 

export default Modal