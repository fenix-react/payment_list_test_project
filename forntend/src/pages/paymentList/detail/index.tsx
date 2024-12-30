import {
  Divider,
  Grid2,
  Paper,
  Skeleton,
  Typography,
  useTheme,
} from '@mui/material';
import { useGetPaymentDetail } from 'api/services/payment';
import { Link, useParams } from 'react-router';
import { formatjalaaliDate } from 'utils/formatJalaaliDate';
import { formatNumber } from 'utils/helpers';
import { ReactComponent as ArrowSVG } from 'static/svg/arrow.svg';
import RetryButton from 'components/payment/list/RetryButton';

const PaymentsDetail = () => {
  const params = useParams();
  const { data, isError, isFetching, refetch } = useGetPaymentDetail({
    id: params.id,
  });
  const theme = useTheme();
  const renderStatusColor = () => {
    switch (data?.status) {
      case 'success':
        return theme.palette.success.main;
      case 'pending':
        return theme.palette.warning.main;
      case 'failed':
        return theme.palette.error.main;

      default:
        return theme.palette.text.primary;
    }
  };
  const list = [
    {
      id: 1,
      name: 'تاریخ پرداخت:',
      value: data ? formatjalaaliDate(data?.paid_at) : '-',
    },
    { id: 2, name: 'شناسه پرداخت:', value: data?.id },
    { id: 3, name: 'نوع پرداخت', value: data?.type },
    { id: 4, name: 'توضیحات', value: data?.description },
  ];
  return (
    <Grid2
      height={'100vh'}
      alignContent={{ xs: 'flex-start', md: 'center' }}
      container
      p={2}
      maxWidth={'800px'}
      margin={'auto'}
      justifyContent={'center'}
      flexWrap={'wrap'}
    >
      {isFetching ? (
        <Paper elevation={3} sx={{ padding: '24px', marginTop: '24px' }}>
          <Skeleton
            width={'100%'}
            height={'56px'}
            sx={{ borderRadius: '8px' }}
            variant="rectangular"
          />
          {[1, 2, 3, 4].map((e) => (
            <Grid2 key={e} mt={2} container justifyContent={'space-between'}>
              <Skeleton
                width={'77px'}
                height={'24px'}
                variant="rectangular"
                sx={{ borderRadius: '8px' }}
              />
              <Skeleton
                width={'146px'}
                height={'24px'}
                variant="rectangular"
                sx={{ borderRadius: '8px' }}
              />
            </Grid2>
          ))}
          <Divider sx={{ my: 2 }} />
          <Grid2 mt={2} container justifyContent={'space-between'}>
            <Skeleton
              width={'77px'}
              height={'24px'}
              variant="rectangular"
              sx={{ borderRadius: '8px' }}
            />
            <Skeleton
              width={'146px'}
              height={'24px'}
              variant="rectangular"
              sx={{ borderRadius: '8px' }}
            />
          </Grid2>
        </Paper>
      ) : isError ? (
        <RetryButton loading={isFetching} onClick={refetch} />
      ) : (
        data && (
          <>
            <Grid2
              sx={{
                '& a': {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  color: 'inherit',
                },
              }}
              container
              mb={2}
              width={'100%'}
            >
              <Link to={'..'}>
                <ArrowSVG />
                <Typography variant="h4">جزییات پرداخت</Typography>
              </Link>
            </Grid2>
            <Paper elevation={3} sx={{ padding: '24px' }}>
              <Grid2
                container
                sx={{
                  backgroundColor: `${renderStatusColor()}18`,
                  borderRadius: '8px',
                }}
                width={'100%'}
                justifyContent={'center'}
                p={2}
              >
                <Typography sx={{ color: renderStatusColor() }} variant="h5">
                  {data?.status}
                </Typography>
              </Grid2>
              {list.map((item) => (
                <Grid2
                  key={data?.id}
                  mt={2}
                  alignItems={'center'}
                  container
                  justifyContent={'space-between'}
                  width={'100%'}
                >
                  <Typography variant="body2">{item.name}</Typography>
                  <Typography variant="h5">{item.value}</Typography>
                </Grid2>
              ))}
              <Divider sx={{ my: 2 }} />{' '}
              <Grid2
                key={data?.id}
                mt={2}
                alignItems={'center'}
                container
                justifyContent={'space-between'}
                width={'100%'}
              >
                <Typography variant="body2">مقدار پرداختی</Typography>
                <Typography variant="h5">
                  {formatNumber(data?.value)}{' '}
                  <Typography variant="h6" component={'span'}>
                    تومان
                  </Typography>
                </Typography>
              </Grid2>
            </Paper>
          </>
        )
      )}
    </Grid2>
  );
};

export default PaymentsDetail;
