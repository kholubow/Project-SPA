import { Photo } from './Photo';


export interface User {
    id: number;
    username: string;
    userSurname: string;
    dateOfBirth: Date;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    photos?: Photo[];
}
