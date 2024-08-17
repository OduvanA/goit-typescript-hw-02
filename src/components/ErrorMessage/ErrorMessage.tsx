import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p>Oops, something went wrong, please reload this page!</p>
    </div>
  );
}
