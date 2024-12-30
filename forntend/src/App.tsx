import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClientConfig from 'api/queryClientConfig';
import Routes from 'routes';
import theme from 'styles/theme';
import 'styles/fonts/estedad_font.css';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
function App() {
  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <QueryClientProvider client={queryClientConfig}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Routes />
          <CssBaseline />
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}

export default App;
