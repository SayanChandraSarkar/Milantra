export function ProfilePage() {
  return (
    <main className="container hero">
      <section className="panel profile-panel">
        <div>
          <p className="eyebrow">Profile builder</p>
          <h2>Your profile</h2>
          <p>Keep your profile complete so families and matches can understand your values quickly.</p>
        </div>

        <div className="grid profile-grid">
          <label>
            <span>First name</span>
            <input defaultValue="Aisha" />
          </label>

          <label>
            <span>Last name</span>
            <input defaultValue="Khan" />
          </label>

          <label>
            <span>Location</span>
            <input defaultValue="New York" />
          </label>

          <label>
            <span>Bio</span>
            <textarea rows={4} defaultValue="Product designer who values family, faith, and long conversations." />
          </label>

          <label>
            <span>Family details</span>
            <textarea rows={4} defaultValue="Close-knit family of five based in Queens." />
          </label>

          <button className="button-primary">Save profile</button>
        </div>
      </section>
    </main>
  );
}
