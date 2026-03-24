export function ChatWindow() {
  return (
    <section className="panel chat-panel">
      <div className="row chat-header">
        <div>
          <h3>Conversation preview</h3>
          <p>Chat unlocks after both profiles accept interest.</p>
        </div>
        <span className="status-pill pending">Awaiting mutual match</span>
      </div>

      <div className="chat-thread">
        <div className="chat-bubble incoming">Aisha: Hi Rohan, nice to connect here.</div>
        <div className="chat-bubble outgoing">Rohan: Likewise, I would love to learn more about your design work.</div>
      </div>

      <div className="grid">
        <textarea rows={4} placeholder="Reply once a match is accepted..." />
        <button className="button-primary" disabled>Send message</button>
      </div>
    </section>
  );
}
