import { Divider, Grid2, Paper, Typography, useTheme } from '@mui/material';
import { TPayment } from 'api/services/payment';
import { Link } from 'react-router';
import { formatjalaaliDate } from 'utils/formatJalaaliDate';
import { formatNumber } from 'utils/helpers';

const PaymentCard = ({ payment }: { payment: TPayment }) => {
  const theme = useTheme();
  const renderStatusColor = () => {
    switch (payment.status) {
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
  return (
    <Link to={`/${payment.id}`}>
      <Paper
        sx={{ borderTop: `3px solid ${renderStatusColor()}` }}
        elevation={3}
      >
        <Grid2 container justifyContent={'space-between'}>
          <Typography color="textPrimary" variant="body2">
            شناسه:{' '}
            <Typography variant="h5" component={'span'} color="textSecondary">
              {payment.id}
            </Typography>
          </Typography>
          <Typography color="textPrimary" variant="body2">
            تاریخ:{' '}
            <Typography variant="h5" component={'span'} color="textSecondary">
              {formatjalaaliDate(payment.paid_at)}
            </Typography>
          </Typography>
        </Grid2>
        <Grid2 mt={2} container justifyContent={'space-between'}>
          <Typography color="textPrimary" variant="body2">
            نوع:{' '}
            <Typography variant="h5" component={'span'} color="textSecondary">
              {payment.type}
            </Typography>
          </Typography>
          <Typography color="textPrimary" variant="body2">
            وضعیت:{' '}
            <Typography
              sx={{ color: renderStatusColor() }}
              variant="h5"
              component={'span'}
            >
              {payment.status}
            </Typography>
          </Typography>
        </Grid2>
        <Grid2 mt={2} container justifyContent={'flex-end'}>
          <Typography color="textPrimary" variant="body2">
            مقدار:{' '}
            <Typography variant="h5" component={'span'} color="textSecondary">
              {formatNumber(payment.value)}
            </Typography>{' '}
            <Typography variant="h6" component={'span'} color="textSecondary">
              تومان
            </Typography>
          </Typography>
        </Grid2>

        <Divider sx={{ margin: '16px 0' }} />
        <Grid2 container>
          <Typography color="textPrimary" variant="body2">
            توضیحات:{' '}
            <Typography variant="h5" component={'span'} color="textSecondary">
              {payment.description || '----'}
            </Typography>
          </Typography>
        </Grid2>
      </Paper>
    </Link>
  );
};

export default PaymentCard;
