export interface User {
    id: string;
    name: string;
    bio: string;
    interests: string[];
    avatar: string;
}

export interface Feed {
    id: string;
    title: string;
    description: string;
    category: string;
}