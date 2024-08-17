import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

export default function LoadMoreBtn({handleLoadMore}: LoadMoreBtnProps) {

  return (
    <div className={css.container}>
      <button className={css.button} onClick={handleLoadMore}>Load more...</button >
    </div>
  );
}
