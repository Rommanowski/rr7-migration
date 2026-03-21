import "./footer.scss";
import {
  GitHubIcon,
  TwitterIcon,
  BlueskyIcon,
  SlackIcon,
  RedditIcon,
  StackOverflowIcon,
  YoutubeIcon,
} from "@rescui/icons";
import type { ComponentType } from "react";

const socialLinks: { url: string; title: string; Icon: ComponentType<any> }[] = [
  { url: "https://github.com/JetBrains/kotlin", title: "Kotlin on GitHub", Icon: GitHubIcon },
  { url: "https://x.com/kotlin", title: "Kotlin on Twitter", Icon: TwitterIcon },
  { url: "https://bsky.app/profile/kotlinlang.org", title: "Kotlin on Bluesky", Icon: BlueskyIcon },
  { url: "https://surveys.jetbrains.com/s3/kotlin-slack-sign-up", title: "Kotlin Slack", Icon: SlackIcon },
  { url: "https://www.reddit.com/r/Kotlin/", title: "Kotlin on Reddit", Icon: RedditIcon },
  { url: "https://stackoverflow.com/questions/tagged/kotlin", title: "Kotlin on Stack Overflow", Icon: StackOverflowIcon },
  { url: "https://www.youtube.com/channel/UCP7uiEZIqci43m22KDl0sNw", title: "Kotlin on YouTube", Icon: YoutubeIcon },
];

const navLinks = [
  { url: "https://kotlinlang.org/docs/contribute.html", title: "Contributing to Kotlin" },
  { url: "https://kotlinlang.org/docs/releases.html", title: "Releases" },
  { url: "https://kotlinlang.org/assets/kotlin-media-kit.pdf", title: "Press Kit" },
  { url: "https://kotlinlang.org/docs/security.html", title: "Security" },
  { url: "https://blog.jetbrains.com/kotlin/", title: "Blog", external: true },
  { url: "https://youtrack.jetbrains.com/issues/KT", title: "Issue Tracker", external: true },
  { url: "https://kotlinlang.org/docs/kotlin-brand-assets.html", title: "Brand Assets", external: true },
  { url: "https://job-boards.eu.greenhouse.io/jetbrains?field_11295751101%5B%5D=25001078101", title: "Careers", external: true },
  { url: "https://www.jetbrainsmerchandise.com/view-all.html?brand=32", title: "Kotlin Merch", external: true },
];

export default function Footer() {
  return (
    <footer className="ktl-footer">
      <div className="ktl-footer__inner">
        <div className="ktl-footer__social">
          <span className="ktl-footer__social-title">Stay in touch:</span>
          <div className="ktl-footer__social-links">
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="ktl-footer__social-link"
                aria-label={link.title}
              >
                <link.Icon size="s" />
              </a>
            ))}
          </div>
        </div>

        <nav className="ktl-footer__nav">
          <ul className="ktl-footer__nav-list">
            {navLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className="ktl-footer__nav-link"
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://jetbrains.com"
          target="_blank"
          rel="noreferrer"
          className="ktl-footer__logo"
          aria-label="jetbrains.com link"
        >
          <img src="/images/jetbrains-logo.svg" alt="JetBrains" />
        </a>

        <div className="ktl-footer__text">
          <p>
            Supported and developed by{"\u00A0"}
            <a href="https://www.jetbrains.com/" target="_blank" rel="noreferrer" className="ktl-footer__link">
              JetBrains
            </a>
            .
          </p>
        </div>

        <div className="ktl-footer__copyright">
          <p>
            Kotlin™ is{"\u00A0"}protected under the{" "}
            <a href="https://kotlinlang.org/foundation/kotlin-foundation.html" className="ktl-footer__link">
              Kotlin{"\u00A0"}Foundation
            </a>{" "}
            and{"\u00A0"}licensed under the{" "}
            <a
              href="https://github.com/JetBrains/kotlin-web-site/blob/master/LICENSE"
              target="_blank"
              rel="noreferrer"
              className="ktl-footer__link"
            >
              Apache 2{"\u00A0"}license
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
