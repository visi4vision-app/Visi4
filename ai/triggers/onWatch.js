import { remember } from '../memory/userMemory.js';

export function onWatch(userId, post) {
  remember(userId, {
    action: 'watch',
    theme: post.theme,
    time: post.time
  });
}
