import { Grid2, MenuItem, Select, Typography } from '@mui/material';
import { useSearchParams } from 'react-router';

const TYPE_OPTIONS = [
  'all',
  'salary',
  'bonus',
  'commission',
  'transportation',
  'overtime',
];

const STATUS_OPTIONS = ['all', 'success', 'failed', 'pending'];

const PaymentListFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Grid2
      padding={{ xs: '0 16px 16px', md: '0 16px' }}
      container
      gap={2}
      width={{ xs: '100%', md: 'auto' }}
      justifyContent={{ xs: 'space-between', md: 'flex-end' }}
    >
      <Grid2 gap={1} display={'flex'} alignItems={'center'}>
        <Typography variant="body2">نوع:</Typography>
        <Select
          onChange={(e) => {
            searchParams.delete('page');
            if (e.target.value === 'all') {
              searchParams.delete('type');
            } else {
              searchParams.set('type', e.target.value);
            }
            setSearchParams(searchParams);
          }}
          value={searchParams.get('type') || 'all'}
          sx={{ paddingRight: '16px' }}
          autoWidth
          variant="outlined"
        >
          {TYPE_OPTIONS.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </Grid2>
      <Grid2 gap={1} display={'flex'} alignItems={'center'}>
        <Typography variant="body2">وضعیت:</Typography>{' '}
        <Select
          onChange={(e) => {
            searchParams.delete('page');
            if (e.target.value === 'all') {
              searchParams.delete('status');
            } else {
              searchParams.set('status', e.target.value);
            }
            setSearchParams(searchParams);
          }}
          value={searchParams.get('status') || 'all'}
          sx={{ paddingRight: '16px' }}
          autoWidth
          variant="outlined"
        >
          {STATUS_OPTIONS.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </Grid2>
    </Grid2>
  );
};

export default PaymentListFilters;
