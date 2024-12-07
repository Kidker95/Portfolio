import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Components/LayoutArea/Layout/Layout';
import './index.css';
import { store } from './Redux/Store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter basename='/Portfolio'>
            <Layout />
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
