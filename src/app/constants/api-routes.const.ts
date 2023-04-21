import { environment } from "@environment";
import { API_FRAGMENTS } from "./api-fragments.const";

export const API_ROUTES = {
    getTeams: `${environment.apiUrl}${API_FRAGMENTS.teams}`,
    getGames: `${environment.apiUrl}${API_FRAGMENTS.games}`
}