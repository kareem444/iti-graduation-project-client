import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './imported/styles/style.scss';
import './index.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MainRouter from './router/main_router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'flag-icon-css/css/flag-icon.min.css'
import i18nextHandler from './utils/core/i18next.handler';
import SplashScreenComponent from './components/splash_screen_component/splash_screen.component';
// import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import "@fortawesome/fontawesome-svg-core"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CookiesProvider } from 'react-cookie';
i18nextHandler()

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<SplashScreenComponent />}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <Provider store={store}>
            <BrowserRouter>
              <MainRouter />
            </BrowserRouter>
          </Provider>
        </CookiesProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>
  </Suspense>
);
