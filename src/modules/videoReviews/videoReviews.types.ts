export interface VideoItem {
  id: number | string;
  videoId: string; // Например, ID видео с YouTube
  // Можно добавить другие поля, например, title, description
}

export interface VideoReviewsProps {
  className?: string;
  title?: string;
  videos: VideoItem[];
}
