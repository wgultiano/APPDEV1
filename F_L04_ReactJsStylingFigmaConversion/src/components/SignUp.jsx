import { useState } from 'react';
import logo from '../assets/logo.svg';
import styles from './SignUp.module.css';

export default function SignUp() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('Account creation is not connected yet.');
  }

  return (
    <main className="auth-page">
      <section className="auth-brand" aria-label="Design Spacee">
        <h1 className="auth-tagline">
          Need webdesign
          <br />
          for your business?
          <br />
          <strong>Design Spacee</strong>
          <br />
          will help you.
        </h1>
        <img className="auth-logo" src={logo} alt="" />
        <p className="auth-brand-link">figma.com/@designspacee</p>
      </section>

      <section className="auth-content">
        <div className={styles.content}>
          <h2>Create Account</h2>

          <div className={styles.socialOptions} role="group" aria-label="Social sign up options">
            <button type="button" onClick={() => setMessage('Google sign up is not connected yet.')}>Sign up with Google</button>
            <button type="button" onClick={() => setMessage('Facebook sign up is not connected yet.')}>Sign up with Facebook</button>
          </div>

          <div className={styles.divider} aria-hidden="true">— OR —</div>

          <form onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className="srOnly">Full Name</span>
              <input name="fullName" type="text" placeholder="Full Name" autoComplete="name" required />
            </label>
            <label className={styles.field}>
              <span className="srOnly">Email</span>
              <input name="email" type="email" placeholder="Email" autoComplete="email" required />
            </label>
            <label className={styles.field}>
              <span className="srOnly">Password</span>
              <input name="password" type="password" placeholder="Password" autoComplete="new-password" required />
            </label>

            <button className={styles.submit} type="submit">Create Account</button>
          </form>

          <p className={styles.loginPrompt}>
            Already have an account? <a href="#login">Login</a>
          </p>
          {message && <p className={styles.message} role="status">{message}</p>}
        </div>
      </section>
    </main>
  );
}
