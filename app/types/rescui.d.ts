declare module "@rescui/icons" {
  import type { ComponentType } from "react";
  interface IconProps {
    size?: "xs" | "s" | "m" | "l";
    className?: string;
  }
  export const GitHubIcon: ComponentType<IconProps>;
  export const TwitterIcon: ComponentType<IconProps>;
  export const BlueskyIcon: ComponentType<IconProps>;
  export const SlackIcon: ComponentType<IconProps>;
  export const RedditIcon: ComponentType<IconProps>;
  export const StackOverflowIcon: ComponentType<IconProps>;
  export const YoutubeIcon: ComponentType<IconProps>;
}
