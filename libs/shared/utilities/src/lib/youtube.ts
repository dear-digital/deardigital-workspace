export function getYoutubeIdFromUrl(url: string) {
  const regEx = "^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?\.com|youtu\.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)";
  const matches = url.match(regEx);
  if (matches) {
    return matches[1];
  }
  return false;
}
