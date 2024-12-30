import { Divider, Grid2, Paper, Skeleton } from '@mui/material';

const PaymentCardSkeleton = () => {
  return (
    <Paper elevation={3} sx={{ marginBottom: '16px' }}>
      <Grid2 container justifyContent={'space-between'}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: '8px' }}
          height={'25px'}
          width={'63px'}
        />
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: '8px' }}
          height={'25px'}
          width={'184px'}
        />
      </Grid2>
      <Grid2 container mt={2} justifyContent={'space-between'}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: '8px' }}
          height={'25px'}
          width={'78px'}
        />
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: '8px' }}
          height={'25px'}
          width={'120px'}
        />
      </Grid2>
      <Grid2 container mt={2} justifyContent={'flex-end'}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: '8px' }}
          height={'25px'}
          width={'145px'}
        />
      </Grid2>
      <Divider sx={{ my: '16px' }} />
      <Grid2 container mt={2}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: '8px' }}
          height={'25px'}
          width={'225px'}
        />
      </Grid2>
    </Paper>
  );
};

export default PaymentCardSkeleton;
