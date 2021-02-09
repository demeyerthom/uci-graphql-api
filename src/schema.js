"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const { gql } = require('apollo-server-express');
exports.typeDefs = gql `
    scalar Date

    type Query {
        seasons: [Season]
    }

    type Season {
        startDate: Date
        endDate: Date
        year: Int,
        mandatoryDate: Date
        id: Int
        name: String
        displayText: String
        code: String
        icon: String
        sequence: Int
        competitions(offset: Int, limit: Int): [Competition]
    }

    type Competition {
        id: Int
        startDate: Date
        endDate: Date
        competitionName: String
        countryName: String
        isInProgress: Boolean
        isDone: Boolean
        countryIsoCode3: String
        countryIsoCode2: String
        classCode: String
        flagCode: String
        date: String
        races(offset: Int, limit: Int): [Race]
    }

    type Race {
        id: Int
        raceCode: String
        index: Int
        startDate: Date
        endDate: Date
        raceName: String
        categoryCode: String
        raceTypeCode: String
        disciplineCode: String
        startLocation: String
        endLocation: String
        mandatoryDate: Date
        eventResultPage: [String]
        venue: String
        date: String
        results(offset: Int, limit: Int): [Result]
    }

    type Result {
        id: Int
        rankNumber: Int
        sortOrder: Int
        teamType: Int
        rank: String
        bib: String
        mandatoryDate: Date
        birthDate: Date
        age: String
        individualDisplayName: String
        individualFirstName: String
        individualLastName: String
        unknownIndividualDisplayName: String
        unknownIndividualFirstName: String
        unknownIndividualLastName: String
        displayName: String
        displayFirstName: String
        displayLastName: String
        isoCode2: String
        nationName: String
        individualCountryIsoCode2: String
        individualCountryName: String
        individualCountryNameText: String
        unknownIndividualCountryIsoCode2: String
        unknownIndividualCountryName: String
        unknownIndividualCountryNameText: String
        teamName: String
        resultValue: String
        pointPcR: Float
        teamPointPcR: Float
        pcRPrefix: String
        pcRSuffix: String
        irm: String
        flagCode: String
        gender: String
        individualGender: String
        unknownIndividualGender: String
        phase: String
        heat: String
    }
`;
//# sourceMappingURL=schema.js.map