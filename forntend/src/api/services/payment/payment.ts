import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getPaymentDetail, getPaymentsListFn } from './payment.query';
import { useSearchParams } from 'react-router';

export const useGetInfinitePayments = () => {
  const [searchParams] = useSearchParams();
  const filters = Object.fromEntries(searchParams);
  return useInfiniteQuery({
    queryKey: ['QUERY_PAYMENTS_LIST', filters],
    queryFn: async ({ pageParam = { page: 1, limit: 10 } }) => {
      return getPaymentsListFn({ params: { ...pageParam, ...filters } });
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.limit * lastPage.page >= lastPage.total
        ? undefined
        : { page: nextPage, limit: 10 };
    },
    initialPageParam: { page: 1, limit: 10 },
  });
};

export const useGetPaymentDetail = ({ id }: { id?: string }) => {
  return useQuery({
    queryKey: ['QUERY_PAYMENT_DETAIL', { id }],
    queryFn: () => getPaymentDetail({ id }),
    enabled: !!id,
  });
};
