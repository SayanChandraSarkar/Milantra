import type { MatchProfile } from '../lib/api';

export function MatchCard({ profile }: { profile: MatchProfile }) {
  return (
    <article className="card" style={{ padding: '1rem' }}>
      <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ marginBottom: 4 }}>{profile.firstName} {profile.lastName}</h3>
          <p style={{ margin: 0 }}>{profile.location} · {profile.community}</p>
        </div>
        {profile.isVerified ? <span>✅ Verified</span> : <span>⏳ Pending</span>}
      </div>
      <p>{profile.bio}</p>
      <p><strong>Languages:</strong> {profile.languages.join(', ')}</p>
      <div className="row">
        <button className="button-primary">Send interest</button>
        <button className="button-secondary">View profile</button>
      </div>
    </article>
  );
}
