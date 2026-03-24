import { FilterBar } from '../components/FilterBar';
import { MatchGrid } from '../features/discovery/MatchGrid';
import { ChatWindow } from '../features/chat/ChatWindow';

export function HomePage() {
  return (
    <main className="container hero home-page">
      <section className="hero-copy">
        <p className="eyebrow">Discover</p>
        <h1>Meaningful introductions for modern families.</h1>
        <p>
          Explore verified profiles, send interests, and unlock respectful conversation once both sides connect.
        </p>
      </section>

      <FilterBar />

      <section className="home-content-grid">
        <MatchGrid />
        <ChatWindow />
      </section>
    </main>
  );
}
