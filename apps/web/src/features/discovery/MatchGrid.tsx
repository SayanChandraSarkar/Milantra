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
    return <div className="panel" style={{ padding: '1rem' }}>{error}</div>;
  }

  return (
    <section className="grid matches-grid">
      {profiles.map((profile) => <MatchCard key={profile.id} profile={profile} />)}
    </section>
  );
}
