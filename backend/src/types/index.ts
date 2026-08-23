export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  rating: number;
  wins: number;
  losses: number;
  draws: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Game {
  id: string;
  whitePlayerId: string;
  blackPlayerId: string;
  moves: string[]; // PGN notation
  result: "1-0" | "0-1" | "1/2-1/2";
  endReason: string;
  startedAt: Date;
  endedAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface JwtPayload {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}
