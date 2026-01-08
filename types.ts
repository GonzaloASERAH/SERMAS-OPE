export enum TopicCategory {
  LEGAL = 'Marco Legal',
  SERMAS = 'Organización SERMAS',
  IT = 'Informática y Ofimática',
  OTHER = 'Otros'
}

export enum StudyStatus {
  PENDING = 'PENDING',
  REVIEWING = 'REVIEWING',
  COMPLETED = 'COMPLETED'
}

export interface SubTopic {
  id: string;
  title: string;
  content?: string; // Content would be loaded here
}

export interface Topic {
  id: number;
  title: string;
  fullTitle: string;
  category: TopicCategory;
  subtopics: SubTopic[];
}

export interface TopicProgress {
  status: StudyStatus;
  lastStudied: number | null; // timestamp
  timeSpentSeconds: number;
  reviewCount: number;
}

export interface UserProgress {
  [topicId: number]: TopicProgress;
}