import { useEffect, useState } from 'react';
import { MatchCard } from '../../components/MatchCard';
import { fetchProfiles, type MatchProfile } from '../../lib/api';

export function MatchGrid() {
  const [profiles, setProfiles] = useState<MatchProfile[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProfiles().then(setProfiles).catch((err: Error) => setError(err.message));
  }, []);

  if (error) {
    return <div className="panel state-panel">Unable to load profiles: {error}</div>;
  }

  if (!profiles.length) {
    return <div className="panel state-panel">Loading curated profiles...</div>;
  }

  return (
    <section className="grid matches-grid" aria-label="Available matches">
      {profiles.map((profile) => <MatchCard key={profile.id} profile={profile} />)}
    </section>
  );
}
