import { DumpPreview } from "@/components/DumpPreview";
import type { ChatLine } from "@/lib/copy";

export function ChatThread({
  messages,
  expandDump,
  collapseDump,
}: {
  messages: ChatLine[];
  expandDump: string;
  collapseDump: string;
}) {
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
              <DumpPreview
                badge={message.dump.badge}
                lines={message.dump.lines}
                expandLabel={expandDump}
                collapseLabel={collapseDump}
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
