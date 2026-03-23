export function AuthForm() {
  return (
    <form className="panel" style={{ padding: '1.5rem', maxWidth: 460 }}>
      <h2>Welcome back</h2>
      <div className="grid">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="button-primary" type="submit">Login</button>
      </div>
    </form>
  );
}
