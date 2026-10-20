import { useState } from 'react'
import leafybackground from '../assets/blue-white-leafy-background-vector_53876-136080 1.svg'
import googleIcon from '../assets/flat-color-icons_google.svg'
import facebookIcon from '../assets/Vector.svg'
import styles from './Login.module.css'

function Login() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('This login page is a design preview.')
  }

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-label="Login">
        <div className={styles.artwork}>
          <img src={leafybackground} alt="" />
        </div>

        <div className={styles.content}>
          <h1 className={styles.greeting}>
            <strong>Hello,</strong><span>Guyss!</span>
          </h1>

          <div className={styles.tabs} aria-label="Current page">
            <span className={styles.activeTab} aria-current="page">Login</span>
            <span className={styles.inactiveTab}>SignUp</span>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.field}
              type="email"
              name="email"
              aria-label="Email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
            <input
              className={styles.field}
              type="password"
              name="password"
              aria-label="Password"
              placeholder="Enter Password"
              autoComplete="current-password"
              required
            />
            <button className={styles.submit} type="submit">Login</button>
          </form>

          <span className={styles.or}>Or</span>
          <div className={styles.socialIcons} aria-label="Social login icons">
            <img src={googleIcon} alt="Google" />
            <img src={facebookIcon} alt="Facebook" />
          </div>
          {message && <p className={styles.message} role="status">{message}</p>}
        </div>
      </section>
    </main>
  )
}

export default Login
