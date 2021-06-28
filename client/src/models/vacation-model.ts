export class VacationModel{
    public constructor(
        public vacationId?: number,
        public destination?: string,
        public description?: string,
        public startDate?: Date,
        public endDate?: Date,
        public price?: number,
        public vacationImg?: string,
        public totalFollowers?:number
    ){
    }
}