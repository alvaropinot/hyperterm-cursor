exports.decorateConfig = config =>
  Object.assign({}, config, {
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node[focus=true] {
        mix-blend-mode: difference;
      }
    `
  });
