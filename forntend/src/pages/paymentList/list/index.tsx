import { Button, Grid2, Pagination, Typography } from '@mui/material';
import { useGetInfinitePayments } from 'api/services/payment';
import PaymentListFilters from 'components/payment/list/Filters';
import PaymentCard from 'components/payment/list/paymentCard';
import PaymentCardSkeleton from 'components/payment/list/paymentCard/Skeleton';
import RetryButton from 'components/payment/list/RetryButton';
import CustomersSearchInput from 'components/payment/list/SearchInput';
import { useSearchParams } from 'react-router';
import useIsDesktop from 'utils/isDesktop';

const PaymentsListNormalPagination = () => {
  const { data, fetchNextPage, isFetchingNextPage, isError, isLoading } =
    useGetInfinitePayments();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageValue = searchParams.get('page');
  const isDesktop = useIsDesktop();
  console.log(isError);

  return (
    <Grid2
      maxWidth={'1400px'}
      maxHeight={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      flexWrap={'nowrap'}
      margin={'auto'}
      pt={2}
      alignContent={'baseline'}
    >
      <Grid2
        justifyContent={'space-between'}
        alignItems={'center'}
        px={2}
        container
        sx={{
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
          },
        }}
      >
        <Typography variant="h4">لیست پرداختی ها</Typography>
        <a href={'/'}>
          <Button
            size="small"
            sx={{ paddingX: '0 12px', fontSize: '14px' }}
            variant="contained"
          >
            go to infinite scroll
          </Button>
        </a>
      </Grid2>
      <Grid2 alignItems={'center'} justifyContent={'space-between'} container>
        <Grid2 alignItems={'center'} flexGrow={1} p={2}>
          <CustomersSearchInput />
        </Grid2>
        <PaymentListFilters />
      </Grid2>
      <Grid2 container justifyContent={'space-between'}></Grid2>
      {isLoading ? (
        <Grid2 px={2} width={'100%'}>
          {[1, 2, 3, 4, 5].map((e) => {
            if (isDesktop)
              return (
                <Grid2 container key={e}>
                  {' '}
                  <Grid2 size={6} p={1.5}>
                    <PaymentCardSkeleton />
                  </Grid2>
                  <Grid2 size={6} p={1.5}>
                    <PaymentCardSkeleton />
                  </Grid2>
                </Grid2>
              );
            else return <PaymentCardSkeleton key={e} />;
          })}
        </Grid2>
      ) : isError ? (
        <RetryButton
          loading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        />
      ) : data && data.pages && data.pages[0].total === 0 ? (
        <>
          <Grid2 mt={5} justifyContent={'center'}>
            <Typography variant="h4" textAlign={'center'}>
              جستجوی شما نتیجه ای نداشت
            </Typography>
          </Grid2>
          <Grid2 container mt={2} justifyContent={'center'}>
            <Button
              onClick={() => {
                searchParams.delete('search');
                setSearchParams(searchParams);
              }}
              variant="outlined"
            >
              حذف جستجو
            </Button>
          </Grid2>
        </>
      ) : (
        data &&
        data.pages && (
          <Grid2
            flexGrow={1}
            overflow={'auto'}
            sx={{
              '& a': {
                textDecoration: 'none',
              },
            }}
            container
            flexWrap={'wrap'}
            gap={{ xs: 2, md: 0 }}
            px={2}
            width={'100%'}
          >
            {data?.pages?.map((page) =>
              page.entities.map((payment, index) => (
                <Grid2
                  p={{ xs: 0, md: 1.5 }}
                  pl={{ xs: 0, md: index % 2 === 0 ? 0 : 1.5 }}
                  pr={{ xs: 0, md: index % 2 === 0 ? 1.5 : 0 }}
                  size={{ xs: 12, md: 6 }}
                  key={payment.id}
                >
                  <PaymentCard payment={payment} />
                </Grid2>
              ))
            )}
          </Grid2>
        )
      )}
      {data && data.pages && (
        <Grid2 container py={2} justifyContent={'center'}>
          <Pagination
            variant="text"
            color="primary"
            onChange={(e, page) => {
              searchParams.set('page', `${page}`);
              setSearchParams(searchParams);
            }}
            count={data?.pages[0].total / 10}
            page={pageValue ? +pageValue : 1}
          />
        </Grid2>
      )}
    </Grid2>
  );
};

export default PaymentsListNormalPagination;
