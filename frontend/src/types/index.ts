export interface User {
  id: string;
  username: string;
  email: string;
  rating: number;
  wins: number;
  losses: number;
  draws: number;
}

export interface Game {
  id: string;
  whitePlayerId: string;
  blackPlayerId: string;
  moves: string[];
  status: "ongoing" | "white_won" | "black_won" | "draw";
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
