
interface User {
    name: string;
    avatar: string;
}

interface Usage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}

export interface MessageType {
    id: string;
    text: string;
    endpoint: string
    user: User;

};
