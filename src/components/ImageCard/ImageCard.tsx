import css from './ImageCard.module.css';
import { Image } from '../types';

interface ImageCardProps {
  item: Image;
  openModal: (value: Image) => void;
}

export default function ImageCard( {
  item,
  openModal,
}: ImageCardProps) {
  const handleClick = () => {
    openModal(item);
  };

  return (
    <div className={css.container} onClick={handleClick}>
      <img className={css.image} src={item.urls.small} alt={item.description} />
    </div>
  );
}
