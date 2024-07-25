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

export interface UserDetail {
    id: string;
    name: string;
    bio: string;
    twitter: string;
    homepage: string;
}