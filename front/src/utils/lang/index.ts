import { ptBr } from "./pt-br";

export function Translate(text: string, lang = "ptBr"): string {
  if (!text) return "";
  if (lang && lang !== "ptBr") return "";

  const translated = ptBr[text.toUpperCase()];

  return translated || text;
}

export function TranslateText(text: string) {
  const translatedText = text.split(" ").map((word) => {
    return Translate(word);
  });
  return translatedText.join(" ");
}
