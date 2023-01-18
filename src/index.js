import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import stores from './stores/index';
import App from './App';
import 'antd/dist/reset.css';
import './index.css';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
  useProxies: 'never',
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider {...stores}>
      <App />
    </Provider>
  </BrowserRouter>
);
