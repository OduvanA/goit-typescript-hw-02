import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Image } from '../types';

interface ImageGalleryProps {
  images: Image[];
  openModal: (value: Image) => void;
}

export default function ImageGallery({images, openModal}: ImageGalleryProps) {
  return (
      <ul className={css.container}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard item={image} openModal={openModal} />
          </li>
        ))}
      </ul>
  );
}
