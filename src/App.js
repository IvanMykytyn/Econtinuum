import { Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage/LandingPage'
import SignIn from './pages/SIgnIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Profile from './pages/Profile/Profile'
import Activities from './pages/Activities/Activities'
import Tutorial from './pages/Tutorial/Tutorial'
import Rating from './pages/Rating/Rating'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProtectedRoute from './utils/ProtectedRoute'

import { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/auth/auth.actions'

function App({ setCurrentUser }) {
  useLayoutEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
  }, [setCurrentUser])

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="rating" element={<Rating />} />
          <Route path="activities" element={<Activities />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App)
