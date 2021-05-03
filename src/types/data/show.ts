export interface IShow {
    dvdCountry: null,
    externals: Externals[],
    genres: Genres[],
    id: number;
    image: Image,
    language: string,
    name: string,
    network: Network,
    officialSite: string,
    premiered: string
    rating: Rating,
    runtime: number,
    schedule: Schedule,
    status: string,
    summary: string,
    type: string,
    updated: number
    url: string,
    webChannel: null,
    weight: number,
    _links: Links
}

export type Externals = {
    tvrage: number,
    thetvdb: number,
    imdb: string
};

export type Genres = string;

export type Image = {
    medium: string,
    original: string
};

export type Network = {
    id: number,
    name: string,
    country: Country
};

export type Country = {
    code: string,
    name: string,
    timezone: string
};

export type Rating = {
    average: number
};

export type Schedule = {
    time: string,
    days: string[]
};

export type Links = {
    previousepisode: {
        href: string
    },
    self: {
        href: string
    }
};