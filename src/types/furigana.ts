export interface ConvertParams {
  text: string;
  options?: {
    mode?: 'furigana' | 'hiragana' | 'katakana';
    to?: 'romaji' | 'hiragana' | 'katakana';
  };
}

export interface ConvertData {
  data: string;
}
