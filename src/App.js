import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <div>
      
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="/" element={<Layout />}>

            <Route path="/" element={<PrivateRoute />}>
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
