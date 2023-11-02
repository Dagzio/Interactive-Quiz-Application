import { BallTriangle } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {

  return (
    <LoaderWrapper>
      <BallTriangle
        height="80"
        width="80"
        color={'rgba(251, 126, 0, 1)'}
        ariaLabel="ballTriangle-loading"
        visible
      />
    </LoaderWrapper>
  );
};

export default Loader;