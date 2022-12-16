export type EventType = {
    id: string;
    title: string;
    date: string;
    time: string;
    location: number;
    current_players: number;
    total_players: number;
    buyin: number;
    description: string;
    firstPrize: number;
    secondPrize: number;
}

export type RetrievedUser = {
    id: string;
    email: string;
    photoURL: string;
}