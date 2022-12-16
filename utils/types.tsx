export type EventType = {
    id: string | undefined;
    title: string | undefined;
    date: string | undefined;
    time: string | undefined;
    location: string | undefined;
    current_players: number | undefined;
    total_players: number | undefined;
    buyin: number | undefined;
    description: string | undefined;
    firstPrize: number | undefined;
    secondPrize: number | undefined;
}

export type RetrievedUser = {
    id: string;
    email: string;
    photoURL: string;
}