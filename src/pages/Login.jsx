import { useState } from 'react'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('All Fields are Required')
      return
    }
    const useremail=localStorage.getItem('Email')
    const userpassword=localStorage.getItem('password') 
    if(email===useremail && password===userpassword){
      window.location.href='/admin'
    }else{
      alert('Invalid details')
    }

    // alert('Login Successful!')
    // Add your login logic here
  }
  console.log(password)
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-logo">CAMIOCA</h1>
        <p className="login-tagline">Intelligent Service</p>
        
        <h2 className="login-title">Welcome back!</h2>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️'}
              </button>
            </div>
            <p className="password-hint">Use at least 8 characters with 1 number, and one special character.</p>
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        <div className="login-footer">
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>

        <div className="register-link-section">
          <span className="register-link-text">Don't have an account? </span>
          <a href="/register" className="register-link">Register</a>
        </div>
      </div>
    </div>
  )
}

export default Login
