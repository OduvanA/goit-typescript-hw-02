import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { IoClose } from "react-icons/io5";
import { Image } from '../types';

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageItem: Image;
}

export default function ImageModal({isOpen, onRequestClose, imageItem}: ImageModalProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      height: '90%',
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className={css.container}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Gallery Modal"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        style={customStyles}
      >
        <button className={css.button} onClick={onRequestClose}><IoClose className={css.icon} /></button>
        <img className={css.image} src={imageItem.urls.regular} alt={imageItem.description} />
      </Modal>
    </div>
  );
}
