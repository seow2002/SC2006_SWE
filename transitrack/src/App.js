import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPageComponents/LoginPage';
import SignupPage from './SignupPageComponents/SignupPage';
import ForgetPasswordPage from './ForgetPasswordPageComponents/ForgetPasswordPage';
import MainHomePage from './HomePageComponents/MainHomePage';
import ViewCrowdLevelPage from './ViewCrowdLevelPageComponents/ViewCrowdLevelPage';
import DBRMainPage from './DiscoverBestRoutesComponents/DBRMainPage';
import VATMainPage from './ViewArrivalTimingsComponents/VATMainPage';
import PWMainPage from './PointsRewardsPageComponents/PWMainPage';
import ReactDOM from 'react-dom';
import { PointProvider } from './PointContext';


ReactDOM.render(
  <React.StrictMode>
    <PointProvider>
      <App />
    </PointProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      console.log('Google Maps script loaded successfully');
      // Here, you can set a state to indicate the script has loaded, if needed
      // Or trigger any global actions
    });
    document.head.appendChild(script);

    // Optional: Clean up the script when the component unmounts
    return () => {
      script.removeEventListener('load', () => console.log('Cleanup'));
      document.head.removeChild(script);
    };
  }, []);

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can log the error to an error reporting service
      console.error("Uncaught error:", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1></h1>;
      }
  
      return this.props.children; 
    }
  }
  

  return (
    <Router>
      <Routes>
      <Route path="/signup" element={<ErrorBoundary><SignupPage /></ErrorBoundary>} />
        <Route path="/" element={<ErrorBoundary><LoginPage /></ErrorBoundary>} />
        <Route path="/forgetpw" element={<ErrorBoundary><ForgetPasswordPage /></ErrorBoundary>} />
        <Route path="/home" element={<ErrorBoundary><MainHomePage /></ErrorBoundary>} />
        <Route path="/viewcrowdlevel" element={<ErrorBoundary><ViewCrowdLevelPage /></ErrorBoundary>} />
        <Route path="/discoverbestroutes" element={<ErrorBoundary><DBRMainPage /></ErrorBoundary>} />
        <Route path="/viewarrivaltimings" element={<ErrorBoundary><VATMainPage /></ErrorBoundary>} />
        <Route path="/pointsandrewards" element={<ErrorBoundary><PWMainPage /></ErrorBoundary>} />
      </Routes>
    </Router>
  );
}

export default App;
