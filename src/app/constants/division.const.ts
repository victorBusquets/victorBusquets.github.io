import { DivisionInterface } from "@interfaces/division.interface";
import { EASTERN_CONFERENCE_ID, WESTERN_CONFERENCE_ID } from "./conference.const";

export const DIVISION_OPTIONS: DivisionInterface[] = [
    {
        id: 'Atlantic',
        name: 'Atlantic Conference',
        conference: EASTERN_CONFERENCE_ID
    }, {
        id: 'Central',
        name: 'Central Conference',
        conference: EASTERN_CONFERENCE_ID
    }, {
        id: 'Northwest',
        name: 'Northwest Conference',
        conference: WESTERN_CONFERENCE_ID
    }, {
        id: 'Pacific',
        name: 'Pacific Conference',
        conference: WESTERN_CONFERENCE_ID
    }, {
        id: 'Southeast',
        name: 'Southeast Conference',
        conference: EASTERN_CONFERENCE_ID
    }, {
        id: 'Southwest',
        name: 'Southwest Conference',
        conference: WESTERN_CONFERENCE_ID
    }
];
