export type EventType = {
    uid: string;
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
    interestedUsers: RetrievedUser[]
}

export type RetrievedUser = {
    uid: string;
    email: string | null;
    name: string | null;
    photoURL: string | null;
}

