
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchGallery } from '../../gallery-api';
import { useEffect, useState } from 'react'
import css from './App.module.css'
import { Image } from '../types';

const initImage = {
  id: 0,
  urls: {
    regular: '',
    small: '',
  },
  description: ''}

export default function App() {

  const [gallery, setGallery] = useState<Image[]>([]);
  const [search, setSearch] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean | number>(false);
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [item, setItem] = useState<Image>(initImage);
  const [totalPages, setTotalPages] = useState<number>(99);

  function openModal(value: Image): void {
    setItem(value);
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }
  

  const handleSearch = (search: string): void => {
    setError(false);
    setGallery([]);
    setPage(1);
    setSearch(search);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (search === "") {
      return;
    }
    async function getGallery() {
      try {
        setLoading(true);
        const data = await fetchGallery(search, page);
        setGallery((currentGallery) => [...currentGallery, ...data.results]);
        setTotalPages(data.total_pages);
        setShowBtn(totalPages && totalPages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  
      getGallery();
    }, [search, page]);

  
  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={gallery} openModal={openModal} />
      <Loader loader={loading} />
      {error && <ErrorMessage />}
      {showBtn && gallery.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {isOpen && <ImageModal isOpen={isOpen}
        imageItem={item}
        onRequestClose={closeModal} />}
    </div>
  )
}