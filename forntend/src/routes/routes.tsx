import NotFoundPage from 'pages/404';
import PaymentsList from 'pages/paymentList';
import PaymentsDetail from 'pages/paymentList/detail';
import PaymentsListNormalPagination from 'pages/paymentList/list';
import PaymentListOutlet from 'pages/paymentList/outlet';

type TRoute = {
  path?: string;
  index?: true;
  element: JSX.Element;
  key: string;
  children?: Omit<TRoute, 'children'>[];
};

export const routes: TRoute[] = [
  {
    path: '*',
    key: '404',
    element: <NotFoundPage />,
  },
  {
    path: '/',
    key: 'paymentsList',
    element: <PaymentListOutlet />,
    index: true,
    children: [
      { index: true, element: <PaymentsList />, key: 'paymentDetail' },
      { path: ':id', element: <PaymentsDetail />, key: 'paymentDetail' },
      {
        path: 'list',
        key: 'paymentsListNormalPagination',
        element: <PaymentsListNormalPagination />,
      },
    ],
  },
];
