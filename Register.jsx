import { useState } from 'react'
import './Register.css'

function Register() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !phone || !email || !password || !address || !city) {
      alert('All Fields are Required')
      return
    }

    // Save user data to localStorage
    const userData = {
      name,
      phone,
      email,
      address,
      city,
      registeredAt: new Date().toISOString()
    }
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('Email', email)
    // Save the password entered by the user for login validation
    localStorage.setItem('password', password)

    alert('Registration Successful!')
    // Redirect to login page
    window.location.href = '/login'
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-logo">CAMIOCA</h1>
        <p className="register-tagline">Intelligent Service</p>
        
        <h2 className="register-title">Create Account</h2>
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
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
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-input"
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <div className="register-footer">
          <span className="login-link-text">Already have an account? </span>
          <a href="/login" className="login-link">Log In</a>
        </div>
      </div>
    </div>
  )
}

export default Register
