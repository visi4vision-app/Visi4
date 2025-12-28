import { remember } from '../memory/userMemory.js';

export function onShare(userId, postId) {
  remember(userId, {
    action: 'share',
    postId
  });
}
