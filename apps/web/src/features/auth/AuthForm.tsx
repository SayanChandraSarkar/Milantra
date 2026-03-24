export function AuthForm() {
  return (
    <form className="panel auth-form">
      <div>
        <p className="eyebrow">Secure sign in</p>
        <h2>Welcome back</h2>
        <p>Sign in to manage your profile, review interests, and continue conversations.</p>
      </div>

      <div className="grid">
        <label>
          <span>Email address</span>
          <input type="email" placeholder="name@example.com" />
        </label>

        <label>
          <span>Password</span>
          <input type="password" placeholder="Enter your password" />
        </label>

        <button className="button-primary" type="submit">Login</button>
      </div>
    </form>
  );
}
