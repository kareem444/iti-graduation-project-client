import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRouter from './router/main_router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'flag-icon-css/css/flag-icon.min.css'
import i18nextHandler from './utils/core/i18next.handler';
import SplashScreenComponent from './components/splash_screen_component/splash_screen.component';
import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import "@fortawesome/fontawesome-svg-core"
i18nextHandler()

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<SplashScreenComponent />}>
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  </Suspense>
);
