export interface UserResult{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}
export interface User{
    id: number;
    name: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}