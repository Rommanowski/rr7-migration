import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "./css/styles-v2.scss";
import Header from "~/components/header";
import Footer from "~/components/footer";

import '@rescui/typography/lib/font-jb-sans-auto.css';


export const links: Route.LinksFunction = () => [
    { rel: "icon", type: "image/svg+xml", href: "/images/favicon.svg" },
    { rel: "alternate icon", href: "/images/favicon.ico" },
    { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" },
    { rel: "apple-touch-icon", sizes: "72x72", href: "/images/apple-touch-icon-72x72.png" },
    { rel: "apple-touch-icon", sizes: "114x114", href: "/images/apple-touch-icon-114x114.png"},
    { rel: "apple-touch-icon", sizes: "144x144", href: "/images/apple-touch-icon-144x144.png"},
    { rel: "preload", href: "/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2", as: "font",
        type: "font/woff2", crossOrigin: "anonymous" },
    { rel: "preload", href: "/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2", as: "font", type:
            "font/woff2", crossOrigin: "anonymous" },

];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="global-layout">
          <Header productWebUrl="https://github.com/JetBrains/kotlin/releases/tag/v1.6.20" />
          {children}
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
