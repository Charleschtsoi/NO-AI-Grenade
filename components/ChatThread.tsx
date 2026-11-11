import type { ChatLine } from "@/lib/copy";

export function ChatThread({ messages }: { messages: ChatLine[] }) {
  return (
    <div className="chat-card">
      {messages.map((message, index) => (
        <div className="slack" key={`${message.name}-${message.time}-${index}`}>
          <div
            className="avatar"
            style={{ background: message.color }}
            aria-hidden="true"
          >
            {message.initials}
          </div>
          <div>
            <div>
              <span className="slack-name">{message.name}</span>
              <span className="slack-time">{message.time}</span>
            </div>
            {message.text ? (
              <div className="slack-message">{message.text}</div>
            ) : null}
            {message.dump ? (
              <div className="dump">
                <div className="dump-badge">{message.dump.badge}</div>
                <div className="dump-body">{message.dump.lines.join("\n")}</div>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
