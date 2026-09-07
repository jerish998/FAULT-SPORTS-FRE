import { useState } from 'react'
import './Login.css'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome back</h1>
        <p className="login-subtitle">Sign in to continue to your dashboard.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="login-field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </label>

          <button type="submit">Log in</button>
        </form>

        {submitted && (
          <p className="login-success">
            Login details ready for {formData.email || 'your account'}.
          </p>
        )}
      </div>
    </div>
  )
}

export default Login
