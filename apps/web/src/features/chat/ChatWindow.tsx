export function ChatWindow() {
  return (
    <section className="panel" style={{ padding: '1rem' }}>
      <h3>Conversation preview</h3>
      <div className="grid">
        <div className="card" style={{ padding: '0.75rem' }}>Aisha: Hi Rohan, nice to connect here.</div>
        <div className="card" style={{ padding: '0.75rem' }}>Rohan: Likewise, I would love to learn more about your design work.</div>
        <textarea rows={4} placeholder="Reply once a match is accepted..." />
        <button className="button-primary">Send message</button>
      </div>
    </section>
  );
}
