export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type Query = {
  __typename?: 'Query';
  seasons?: Maybe<Array<Maybe<Season>>>;
};

export type Season = {
  __typename?: 'Season';
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  year?: Maybe<Scalars['Int']>;
  mandatoryDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  displayText?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  competitions?: Maybe<Array<Maybe<Competition>>>;
};


export type SeasonCompetitionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Competition = {
  __typename?: 'Competition';
  id?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  competitionName?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  isInProgress?: Maybe<Scalars['Boolean']>;
  isDone?: Maybe<Scalars['Boolean']>;
  countryIsoCode3?: Maybe<Scalars['String']>;
  countryIsoCode2?: Maybe<Scalars['String']>;
  classCode?: Maybe<Scalars['String']>;
  flagCode?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  races?: Maybe<Array<Maybe<Race>>>;
};


export type CompetitionRacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Race = {
  __typename?: 'Race';
  id?: Maybe<Scalars['Int']>;
  raceCode?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  raceName?: Maybe<Scalars['String']>;
  categoryCode?: Maybe<Scalars['String']>;
  raceTypeCode?: Maybe<Scalars['String']>;
  disciplineCode?: Maybe<Scalars['String']>;
  startLocation?: Maybe<Scalars['String']>;
  endLocation?: Maybe<Scalars['String']>;
  mandatoryDate?: Maybe<Scalars['Date']>;
  eventResultPage?: Maybe<Array<Maybe<Scalars['String']>>>;
  venue?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Result>>>;
};


export type RaceResultsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Result = {
  __typename?: 'Result';
  id?: Maybe<Scalars['Int']>;
  rankNumber?: Maybe<Scalars['Int']>;
  sortOrder?: Maybe<Scalars['Int']>;
  teamType?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['String']>;
  bib?: Maybe<Scalars['String']>;
  mandatoryDate?: Maybe<Scalars['Date']>;
  birthDate?: Maybe<Scalars['Date']>;
  age?: Maybe<Scalars['String']>;
  individualDisplayName?: Maybe<Scalars['String']>;
  individualFirstName?: Maybe<Scalars['String']>;
  individualLastName?: Maybe<Scalars['String']>;
  unknownIndividualDisplayName?: Maybe<Scalars['String']>;
  unknownIndividualFirstName?: Maybe<Scalars['String']>;
  unknownIndividualLastName?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  displayFirstName?: Maybe<Scalars['String']>;
  displayLastName?: Maybe<Scalars['String']>;
  isoCode2?: Maybe<Scalars['String']>;
  nationName?: Maybe<Scalars['String']>;
  individualCountryIsoCode2?: Maybe<Scalars['String']>;
  individualCountryName?: Maybe<Scalars['String']>;
  individualCountryNameText?: Maybe<Scalars['String']>;
  unknownIndividualCountryIsoCode2?: Maybe<Scalars['String']>;
  unknownIndividualCountryName?: Maybe<Scalars['String']>;
  unknownIndividualCountryNameText?: Maybe<Scalars['String']>;
  teamName?: Maybe<Scalars['String']>;
  resultValue?: Maybe<Scalars['String']>;
  pointPcR?: Maybe<Scalars['Float']>;
  teamPointPcR?: Maybe<Scalars['Float']>;
  pcRPrefix?: Maybe<Scalars['String']>;
  pcRSuffix?: Maybe<Scalars['String']>;
  irm?: Maybe<Scalars['String']>;
  flagCode?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  individualGender?: Maybe<Scalars['String']>;
  unknownIndividualGender?: Maybe<Scalars['String']>;
  phase?: Maybe<Scalars['String']>;
  heat?: Maybe<Scalars['String']>;
};
