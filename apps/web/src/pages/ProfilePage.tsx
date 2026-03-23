export function ProfilePage() {
  return (
    <main className="container hero">
      <section className="panel" style={{ padding: '1.5rem' }}>
        <h2>Your profile</h2>
        <div className="grid">
          <input defaultValue="Aisha" />
          <input defaultValue="Khan" />
          <input defaultValue="New York" />
          <textarea rows={4} defaultValue="Product designer who values family, faith, and long conversations." />
          <textarea rows={4} defaultValue="Close-knit family of five based in Queens." />
          <button className="button-primary">Save profile</button>
        </div>
      </section>
    </main>
  );
}
