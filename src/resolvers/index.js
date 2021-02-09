"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        seasons: async (_source, { dataSources }) => {
            let seasons = [];
            await dataSources.resultsProvider.listSeasons().then(function (resp) {
                resp.forEach(function (element) {
                    let season = {
                        code: element.Code,
                        displayText: element.DisplayText,
                        startDate: element.StartDate.toISOString(),
                        endDate: element.EndDate.toISOString(),
                        mandatoryDate: element.MandatoryDate.toISOString(),
                        icon: "",
                        id: element.Id,
                        name: element.Name,
                        sequence: element.Sequence,
                        year: element.Year
                    };
                    seasons.push(season);
                });
            });
            seasons = seasons.filter(season => season.year == 2021);
            return seasons;
        }
    },
    Season: {
        competitions: async (parent, args, { dataSources }) => {
            let competitions = [];
            await dataSources.resultsProvider.listCompetitions({
                seasonID: parent.id,
                pageSize: args.limit
            }).then(function (response) {
                response.data.forEach(function (element) {
                    let competition = {
                        id: element.CompetitionId,
                        startDate: element.StartDate.toISOString(),
                        endDate: element.EndDate.toISOString(),
                        competitionName: element.CompetitionName,
                        countryName: element.CountryName,
                        isInProgress: element.IsInProgress,
                        isDone: element.IsDone,
                        countryIsoCode3: element.CountryIsoCode3,
                        countryIsoCode2: element.CountryIsoCode2,
                        classCode: element.ClassCode,
                        flagCode: element.FlagCode,
                        date: element.Date
                    };
                    competitions.push(competition);
                });
            });
            return competitions;
        }
    },
    Competition: {
        races: async (parent, {}, { dataSources }) => {
            let races = [];
            await dataSources.resultsProvider.listRaces({
                competitionId: parent.id,
                pageSize: 1
            }).then(function (response) {
                response.data.forEach(function (element) {
                    let race = {
                        id: element.Id,
                        raceCode: element.RaceCode,
                        index: element.Index,
                        startDate: element.StartDate.toISOString(),
                        endDate: element.EndDate.toISOString(),
                        mandatoryDate: element.MandatoryDate.toISOString(),
                        raceName: element.RaceName,
                        categoryCode: element.CategoryCode,
                        raceTypeCode: element.RaceTypeCode,
                        disciplineCode: element.DisciplineCode,
                        startLocation: element.StartLocation,
                        endLocation: element.EndLocation,
                        eventResultPage: element.EventResultPage,
                        venue: element.Venue,
                        date: element.Date,
                    };
                    races.push(race);
                });
            });
            return races;
        }
    },
    Race: {
        results: async (parent, {}, { dataSources }) => {
            let results = [];
            await dataSources.resultsProvider.listResults({
                raceId: parent.id,
                pageSize: 1
            }).then(function (response) {
                response.data.forEach(function (element) {
                    let result = {
                        id: element.ResultId,
                        rankNumber: element.RankNumber,
                        sortOrder: element.SortOrder,
                        teamType: element.TeamType,
                        rank: element.Rank,
                        bib: element.Bib,
                        mandatoryDate: element.MandatoryDate.toISOString(),
                        birthDate: element.BirthDate.toISOString(),
                        age: element.Age,
                        individualDisplayName: element.IndividualDisplayName,
                        individualFirstName: element.IndividualFirstName,
                        individualLastName: element.IndividualLastName,
                        unknownIndividualDisplayName: element.UnknownIndividualDisplayName,
                        unknownIndividualFirstName: element.UnknownIndividualFirstName,
                        unknownIndividualLastName: element.UnknownIndividualLastName,
                        displayName: element.DisplayName,
                        displayFirstName: element.DisplayFirstName,
                        displayLastName: element.DisplayLastName,
                        isoCode2: element.IsoCode2,
                        nationName: element.NationName,
                        individualCountryIsoCode2: element.IndividualCountryIsoCode2,
                        individualCountryName: element.IndividualCountryName,
                        individualCountryNameText: element.IndividualCountryNameText,
                        unknownIndividualCountryIsoCode2: element.UnknownIndividualCountryIsoCode2,
                        unknownIndividualCountryName: element.UnknownIndividualCountryName,
                        unknownIndividualCountryNameText: element.IndividualCountryNameText,
                        teamName: element.TeamName,
                        resultValue: element.ResultValue,
                        pointPcR: element.PointPcR,
                        pcRPrefix: element.PcRPrefix,
                        pcRSuffix: element.PcRSuffix,
                        irm: element.Irm,
                        flagCode: element.FlagCode,
                        gender: element.Gender,
                        individualGender: element.IndividualGender,
                        unknownIndividualGender: element.UnknownIndividualGender,
                        phase: element.Phase,
                        heat: element.Heat
                    };
                    results.push(result);
                });
            });
            return results;
        }
    }
};
//# sourceMappingURL=index.js.map