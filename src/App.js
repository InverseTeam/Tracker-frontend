import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import AllCoursesPage from './pages/AllCoursesPage/AllCoursesPage';
import MyCoursesPage from './pages/MyCoursesPage/MyCoursesPage';
import NewCoursePage from './pages/NewCoursePage/NewCoursePage';
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import PrivateRoute from './router/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='my-courses' element={<MyCoursesPage />} />
            <Route path='new-course' element={<NewCoursePage />} />
            <Route path='courses' element={<AllCoursesPage />} />
            {/* <Route path='/' element={<Layout />}>
            </Route> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
