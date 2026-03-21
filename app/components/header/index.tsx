import "./header.scss";

const navItems = [
  { title: "Solutions", url: "/multiplatform/" },
  { title: "Docs", url: "/docs/home.html" },
  { title: "Community", url: "/community/" },
  { title: "Teach", url: "/education/" },
  { title: "Play", url: "https://play.kotlinlang.org" },
];

export default function Header({ productWebUrl }: { productWebUrl?: string }) {
  const version = productWebUrl ? extractVersion(productWebUrl) : null;

  return (
    <header className="ktl-header">
      <div className="ktl-header__inner ktl-layout ktl-layout--center">
        <div className="ktl-header__logo">
          <a href="https://kotlinlang.org" aria-label="Kotlin Home Page">
            <img src="/images/kotlin-logo.svg" alt="Kotlin" className="ktl-header__logo-img" />
          </a>
          {version && (
            <a href={productWebUrl} target="_blank" rel="noreferrer" className="ktl-header__version">
              {version}
            </a>
          )}
        </div>
        <nav className="ktl-header__nav">
          {navItems.map((item) => (
            <a key={item.title} href={item.url} className="ktl-header__nav-link">
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function extractVersion(url: string): string | null {
  const match = /v?\d+\.\d+\.\d+$/.exec(url);
  return match ? match[0] : null;
}
