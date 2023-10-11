import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import SearchResults from './components/SearchResults';
import WatchPage from './components/WatchPage';
import store from './utils/store';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchPage />
      },
      {
        path: 'results',
        element: <SearchResults />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <div className="App">
          {/* <Header /> */}
          {/* <Body /> */}
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
