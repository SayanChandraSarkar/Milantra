import { AuthForm } from '../features/auth/AuthForm';

export function LoginPage() {
  return (
    <main className="container hero">
      <section className="auth-layout">
        <AuthForm />
      </section>
    </main>
  );
}
