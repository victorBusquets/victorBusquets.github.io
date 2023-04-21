import { ConferenceInterface } from "@interfaces/conference.interface"

export const EASTERN_CONFERENCE_ID : string = "East";
export const WESTERN_CONFERENCE_ID : string = "West";

export const CONFERENCE_OPTIONS: ConferenceInterface[] = [
    {
        id: EASTERN_CONFERENCE_ID,
        name: 'Eastern Conference',
    }, {
        id: WESTERN_CONFERENCE_ID,
        name: 'Western Conference',
    }
];
