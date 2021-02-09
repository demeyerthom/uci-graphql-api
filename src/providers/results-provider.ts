import {AxiosResponse} from "axios";

export interface ResultsProvider {
    listSeasons(disciplineID: number): Promise<AxiosResponse>;

    listCompetitions(parameters: {
        disciplineID: number,
        seasonID: number,
        take?: number,
        skip?: number,
        page?: number,
        pageSize?: number,
        raceTypeID?: number,
        categoryID?: number
    }): Promise<AxiosResponse>;

    listRaces(parameters: {
        disciplineID: number,
        competitionId: number,
        take?: number,
        skip?: number,
        page?: number,
        pageSize?: number,
    }): Promise<AxiosResponse>;

    listResults(parameters: {
        disciplineID: number,
        raceId: number,
        take?: number,
        skip?: number,
        page?: number,
        pageSize?: number,
    }): Promise<AxiosResponse>;
}