import { remember } from '../memory/userMemory.js';

export function onLike(userId, postId) {
  remember(userId, {
    action: 'like',
    postId
  });
}
