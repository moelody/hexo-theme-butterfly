/**
 * note.js
 * transplant from hexo-theme-next
 */

'use strict';

function postNote(args, content) {
  return `<div class="snote ${args.join(' ')}">${hexo.render.renderSync({ text: content, engine: 'markdown' })}</div>`;
}

hexo.extend.tag.register('snote', postNote, { ends: true });
