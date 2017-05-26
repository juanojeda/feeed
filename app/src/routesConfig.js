import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const RoutesConfig = [
  { component: About,    path: 'about' },
  { component: App,      path: '/' },
  { component: NotFound, path: '*' },
];

export default RoutesConfig;
