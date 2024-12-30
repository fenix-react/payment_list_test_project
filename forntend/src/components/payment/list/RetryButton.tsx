import { Button, CircularProgress, Grid2, Typography } from '@mui/material';

const RetryButton = ({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading: boolean;
}) => {
  return (
    <Grid2 my={2} textAlign={'center'}>
      <Typography>
        مشکلی در گرفتن اطلاعات پیش آمد. لطفا دوباره تلاش کنید
      </Typography>
      <Button
        sx={{ margin: 'auto', marginTop: '16px' }}
        onClick={onClick}
        variant="contained"
        disabled={loading}
      >
        {loading ? <CircularProgress size={20} /> : ' تلاش دوباره'}
      </Button>
    </Grid2>
  );
};

export default RetryButton;
