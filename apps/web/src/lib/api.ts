const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000/api/v1';

export type MatchProfile = {
  id: string;
  firstName: string;
  lastName: string;
  location: string;
  community: string;
  languages: string[];
  bio: string;
  isVerified: boolean;
};

export async function fetchProfiles(): Promise<MatchProfile[]> {
  const response = await fetch(`${API_URL}/profiles`);
  if (!response.ok) {
    throw new Error('Failed to fetch profiles');
  }
  return response.json();
}
