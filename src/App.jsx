import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import FileBasedSearchPage from './pages/FileBasedSearchPage';
import Loading from './components/Loading';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/search-file' element={<FileBasedSearchPage />} />
        <Route path='/about' element={<Loading />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
};
export default App;