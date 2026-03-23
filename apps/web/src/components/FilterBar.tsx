export function FilterBar() {
  return (
    <section className="panel" style={{ padding: '1rem', marginBottom: '1rem' }}>
      <div className="row">
        <input placeholder="Location" defaultValue="New York" />
        <select defaultValue="">
          <option value="">Community</option>
          <option value="Urdu">Urdu</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Punjabi">Punjabi</option>
        </select>
        <select defaultValue="">
          <option value="">Language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Urdu">Urdu</option>
        </select>
        <button className="button-secondary">Apply filters</button>
      </div>
    </section>
  );
}
