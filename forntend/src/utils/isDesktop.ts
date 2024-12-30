import { useMediaQuery } from '@mui/material';

const useIsDesktop = () => {
  const isDesktop = useMediaQuery('(min-width:960px)');
  return isDesktop;
};

export default useIsDesktop;
