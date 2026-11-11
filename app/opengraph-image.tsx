import { ImageResponse } from "next/og";

export const alt = "no AI grenade — please don't throw unread AI at people";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#fefefe",
          color: "#04143a",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            display: "flex",
          }}
        >
          no AI{" "}
          <span
            style={{
              marginLeft: 18,
              textDecoration: "line-through",
              textDecorationColor: "#e23d28",
            }}
          >
            grenade
          </span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#81899c",
            fontWeight: 400,
          }}
        >
          please don&apos;t throw unread AI at people
        </div>
      </div>
    ),
    size,
  );
}
