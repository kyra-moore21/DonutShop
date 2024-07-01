export interface DonutModel {
    count:   number;
    results: Result[];
}

export interface Result {
    id:                number;
    ref:               string;
    name:              string;
    photo:             string;
    photo_attribution: string;
}
