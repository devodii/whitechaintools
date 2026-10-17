import { codeToHtml } from "shiki";

export async function highlight(code: string, lang: string) {
  "use cache";

  return codeToHtml(code, {
    lang,
    themes: {
      light: "github-light-high-contrast",
      dark: "github-dark-high-contrast",
    },
    defaultColor: false,
  });
}
