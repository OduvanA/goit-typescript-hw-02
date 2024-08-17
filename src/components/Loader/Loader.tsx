import css from './Loader.module.css';
import { Blocks } from 'react-loader-spinner'

interface LoaderProps {
  loader: boolean;
}

export default function Loader({loader}: LoaderProps) {
  return (
    <div className={css.container}>
        <Blocks
        height="60"
        width="60"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={loader}
        />
    </div>
  );
}
