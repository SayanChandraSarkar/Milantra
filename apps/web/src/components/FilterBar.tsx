export function FilterBar() {
  return (
    <section className="panel filter-bar">
      <div className="filter-header row">
        <h2>Refine your search</h2>
        <p>Filter by city, community, language, and preferred age range.</p>
      </div>

      <div className="grid filter-grid">
        <label>
          <span>Location</span>
          <input placeholder="City" defaultValue="New York" />
        </label>

        <label>
          <span>Community</span>
          <select defaultValue="">
            <option value="">Any community</option>
            <option value="Urdu">Urdu</option>
            <option value="Gujarati">Gujarati</option>
            <option value="Punjabi">Punjabi</option>
          </select>
        </label>

        <label>
          <span>Language</span>
          <select defaultValue="">
            <option value="">Any language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Urdu">Urdu</option>
          </select>
        </label>

        <label>
          <span>Age preference</span>
          <select defaultValue="26-32">
            <option value="23-27">23-27</option>
            <option value="26-32">26-32</option>
            <option value="30-36">30-36</option>
          </select>
        </label>
      </div>

      <div className="row filter-actions">
        <button className="button-primary">Apply filters</button>
        <button className="button-secondary">Clear</button>
      </div>
    </section>
  );
}
