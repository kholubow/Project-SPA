export interface Instance {
    id: number;
    content: string;
    instanceStart: Date;
    instanceEnd: Date;
    userId: number;
    username: string;
    userSurname: string;
    position: string;
    typeOfInstance: string;
    approval: string;
    reason: string;
}
