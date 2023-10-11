export const YOUTUBE_API_KEY = 'AIzaSyDgSsWd2j5VMkk-0bq0HeI529bxBfFR8jU';
export const YOUTUBE_VIDEO_API =
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=500&regionCode=IN&key=${YOUTUBE_API_KEY}`;
export const YOUTUBE_VIDEO_URL =
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;
export const YOUTUBE_SEARCH_SUGGESTIONS_API =
    'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&maxResults=25&q=';
export const YOUTUBE_VIDEO_COMMENTS_API =
    'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=';
export const YOUTUBE_SEARCH_RESULTS_API =
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=viewCount&q=';
export const YOUTUBE_CHANNEL_DATA_API =
    'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=';
export const LIVE_CHAT_COUNT = 15;
export const YOUTUBE_SEARCH_BY_CATEGORY_ID =
    'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=100&order=viewCount&regionCode=IN&videoCategoryId=';
