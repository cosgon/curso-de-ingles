/// <reference types="vite/client" />

declare module "*.md?raw" {
  const markdownContent: string;
  export default markdownContent;
}
