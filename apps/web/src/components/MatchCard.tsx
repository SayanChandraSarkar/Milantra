import type { MatchProfile } from '../lib/api';

export function MatchCard({ profile }: { profile: MatchProfile }) {
  return (
    <article className="card match-card">
      <div className="row card-head">
        <div>
          <h3>{profile.firstName} {profile.lastName}</h3>
          <p>{profile.location} · {profile.community}</p>
        </div>
        <span className={`status-pill ${profile.isVerified ? 'verified' : 'pending'}`}>
          {profile.isVerified ? 'Verified' : 'Verification pending'}
        </span>
      </div>

      <p className="bio">{profile.bio}</p>
      <p className="meta"><strong>Languages:</strong> {profile.languages.join(', ')}</p>

      <div className="row">
        <button className="button-primary">Send interest</button>
        <button className="button-secondary">View profile</button>
      </div>
    </article>
  );
}
