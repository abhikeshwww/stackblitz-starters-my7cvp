export const YOUTUBE_LOGO =
  'https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg';
const key = 'AIzaSyC3oHmoZpZ7GWo6V5iZHgOJ6cQRecy4NtY';
export const YOUTUBE_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  key;

export const YOUTUBE_API_SUGGESTIONS_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const VIDEO_COMMENT_API =
  'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=szvt1vD0Uug&key=AIzaSyC3oHmoZpZ7GWo6V5iZHgOJ6cQRecy4NtY';

export const RELTED_VIDEO_URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC3oHmoZpZ7GWo6V5iZHgOJ6cQRecy4NtY&type=video&relatedToVideoId=';
