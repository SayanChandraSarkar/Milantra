import { FilterBar } from '../components/FilterBar';
import { MatchGrid } from '../features/discovery/MatchGrid';
import { ChatWindow } from '../features/chat/ChatWindow';

export function HomePage() {
  return (
    <main className="container hero">
      <section style={{ marginBottom: '1.5rem' }}>
        <h1>Meaningful introductions for modern families.</h1>
        <p>Discover verified profiles, send interests, and unlock respectful conversation after a mutual match.</p>
      </section>
      <FilterBar />
      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'start' }}>
        <MatchGrid />
        <ChatWindow />
      </div>
    </main>
  );
}
