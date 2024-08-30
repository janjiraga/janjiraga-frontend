export type User = {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  id: string;
  name: string;
};

export type Venue = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  zoomLevel: number;
};

export type Event = {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  venue: Venue;
  maxParticipants: number;
  dateTimeStart: string; // ISO date string
  dateTimeEnd: string; // ISO date string
  categoryId: string;
  userId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  category: Category;
};

export type EventsResponse = {
  code: number;
  status: string;
  data: Event[];
};
