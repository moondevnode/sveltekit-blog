export const admonitionTokenizer = {
  name: 'admonition',
  level: 'block',
  start(src) {
    return src.indexOf('!!!');
  },
  tokenizer(src) {
    // const rule = /^!!! +(.*)\n+(.*)\n/;
    const rule = /^!!! +([^\n]+)\n([\S\n ]*?)\n\n/;
    const match = rule.exec(src);
    console.log(match);
    if (match) {
      return {
        type: 'admonition',
        raw: match[0],
        text: match[1] + ' test ' + match[2]
      };
    }
  }
};
