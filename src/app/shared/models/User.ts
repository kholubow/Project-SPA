import { Photo } from './Photo';


export interface User {
    id: number;
    username: string;
    userSurname: string;
    position: string;
    dateOfBirth: Date;
    gender: string;
    photoUrl: string;
    city: string;
    country: string;
    photos?: Photo[];
}
