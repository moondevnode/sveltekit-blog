export const customTokenizer = {
  name: 'custom',
  level: 'block',
  start(src) {
    return src.indexOf('%');
  },
  tokenizer(src) {
    const rule = /^\%(.*)/;
    const match = rule.exec(src);
    console.log(match);
    if (match) {
      return {
        type: 'custom',
        raw: match[0],
        text: match[1]
      };
    }
  }
};
