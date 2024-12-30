import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ReactComponent as SearchSVG } from 'static/svg/search.svg';
import { ReactComponent as CloseSVG } from 'static/svg/close.svg';
import { useSearchParams } from 'react-router';

const CustomersSearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('search') || '');
  useEffect(() => {
    let delayDebounce: number;

    if (value.length > 2) {
      delayDebounce = window.setTimeout(async () => {
        searchParams.delete('page');
        searchParams.set('search', value);
        setSearchParams(searchParams);
      }, 2000);
    }
    return () => {
      clearTimeout(delayDebounce);
    };
  }, [value]);

  useEffect(() => {
    if (!searchParams.get('search')) {
      setValue('');
    }
  }, [searchParams.get('search')]);

  return (
    <TextField
      sx={{ backgroundColor: '#fff' }}
      fullWidth
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        if (e.target.value === '') {
          searchParams.delete('search');
          setSearchParams(searchParams);
        }
      }}
      placeholder={'جستجو در پرداختی ها'}
      slotProps={{
        input: {
          startAdornment: <SearchSVG />,
          endAdornment:
            value?.length > 0 ? (
              <CloseSVG
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setValue('');
                  searchParams.delete('search');
                  setSearchParams(searchParams);
                }}
              />
            ) : (
              ''
            ),
        },
      }}
    />
  );
};

export default CustomersSearchInput;
