import './App.css'
import { Router } from './routes'

/**
 * Main App component that serves as the entry point for the application.
 * 
 * The Router component (imported from './routes/index.tsx') handles all routing:
 * - / => LandingPage (src/pages/landing/page.tsx)
 * - /auth/sign-in => SignInPage (src/pages/auth/sign-in.tsx)
 * - /auth/sign-up => SignUpPage (src/pages/auth/sign-up.tsx)
 * - /dashboard => Will be Dashboard component (currently redirects to sign-in)
 * - /profile => Will be Profile component (currently redirects to sign-in)
 * - /settings => Will be Settings component (currently redirects to sign-in)
 * - * (any other route) => Redirects to landing page
 */
function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Router component handles all page routing */}
      <Router />
    </div>
  )
}

export default App
