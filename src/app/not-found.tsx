"use client";
import Link from "next/link";
import "../styles/components/error-found.css";

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/movie.png" />
      </head>
      <body>
        <div>
          <div className="not-found-container">
            <div className="not-found-code">404</div>
            <div className="not-found-text">Page Not Found</div>

            <Link href="/" className="not-found-button">
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
