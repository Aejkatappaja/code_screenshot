import { fonts } from './fonts';
import { languages } from './languages';
import { codeSnippets } from './snippets';
import { themes } from './themes';

export type OptionsType = {
  fonts: Record<string, { name: string; src: string }>;
  languages: Record<string, string>;
  codeSnippets: { language: string; code: string }[];
  themes: Record<string, { background: string; theme: string }>;
};

const options: OptionsType = {
  fonts,
  languages,
  codeSnippets,
  themes,
};

export default options;
