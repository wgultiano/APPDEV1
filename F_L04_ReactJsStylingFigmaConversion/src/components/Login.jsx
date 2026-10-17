import logo from '../assets/logo.svg';
import styles from './Login.module.css';

export default function Login() {
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
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <h2>Sign-in</h2>

          <label className={styles.field}>
            <span className="srOnly">Email</span>
            <input type="email" name="email" placeholder="Email" autoComplete="email" required />
          </label>
          <label className={styles.field}>
            <span className="srOnly">Password</span>
            <input type="password" name="password" placeholder="Password" autoComplete="current-password" required />
          </label>

          <button type="submit">Login</button>

          <p className={styles.signup}>
            Don&apos;t have an account? <a href="#signup">Signup Here</a>
          </p>
        </form>
      </section>
    </main>
  );
}
