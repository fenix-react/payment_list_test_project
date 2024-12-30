import apiHandler from 'api/apiHandler';
import { TPayment } from './payment.type';
import routes from '../routes';
import { Paginate } from 'types/shared';

export const getPaymentsListFn = async ({
  params,
}: {
  params?: Record<string, string | number>;
}) => {
  return await apiHandler<Paginate<TPayment>>({
    method: 'get',
    url: routes.PAYMENTS_LIST,
    params,
  }).then((res) => res.data);
};

export const getPaymentDetail = async ({ id }: { id?: string }) => {
  return await apiHandler<TPayment>({
    method: 'get',
    url: `${routes.PAYMENTS_LIST}${id}/`,
  }).then((res) => res.data);
};
