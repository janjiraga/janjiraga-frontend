export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  username: string;
  updatedAt: string;
  createdAt: string;
};

export type UserProfile = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  username: string;
  events: Event[];
  participants: Participant[];
  updatedAt: string;
  createdAt: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Venue = {
  id: string;
  name: string;
  slug: string;
  address: string;
  imageUrl: string;
  mapsUrl: string;
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
  maxParticipants: number;
  dateTimeStart: string; // ISO date string
  dateTimeEnd: string; // ISO date string
  categoryId: string;
  userId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  category: Category;
  user: User;
  venue: Venue;
  participants: Participant[];
};

export type EventsResponse = {
  code: number;
  status: string;
  data: Event[];
};

export type DetailEventResponse = {
  code: number;
  status: string;
  data: Event;
};

export type Participant = {
  id: string;
  isPaid: boolean;
  userId: string;
  eventId: string;
  event: Event;
  user: User;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};
