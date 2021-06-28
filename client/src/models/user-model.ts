export class UserModel{
    public constructor(
        public userId?: number,
        public firstName?: string,
        public lastName?: string,
        public userName?: string,
        public password?: string,
        public isAdmin?: boolean,
    ){
    }
}