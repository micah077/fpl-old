// Generated by https://quicktype.io
import { Result } from "./FPLLeague";
import { Element } from "./FPLStatic";

export interface Events {
    elements: EventElement[];
}

export interface EventElement {
    id:      number;
    stats:   Stats;
    explain: Explain[];
}

export interface Explain {
    fixture: number;
    stats:   Stat[];
}

export interface Stat {
    identifier: Identifier;
    points:     number;
    value:      number;
}

export enum Identifier {
    Assists = "assists",
    Bonus = "bonus",
    CleanSheets = "clean_sheets",
    GoalsConceded = "goals_conceded",
    GoalsScored = "goals_scored",
    Minutes = "minutes",
    OwnGoals = "own_goals",
    PenaltiesMissed = "penalties_missed",
    RedCards = "red_cards",
    Saves = "saves",
    YellowCards = "yellow_cards",
}

export interface Stats {
    minutes:                    number;
    goals_scored:               number;
    assists:                    number;
    clean_sheets:               number;
    goals_conceded:             number;
    own_goals:                  number;
    penalties_saved:            number;
    penalties_missed:           number;
    yellow_cards:               number;
    red_cards:                  number;
    saves:                      number;
    bonus:                      number;
    bps:                        number;
    influence:                  string;
    creativity:                 string;
    threat:                     string;
    ict_index:                  string;
    starts:                     number;
    expected_goals:             string;
    expected_assists:           string;
    expected_goal_involvements: string;
    expected_goals_conceded:    string;
    total_points:               number;
    in_dreamteam:               boolean;
}

export interface EventDatabase {
    GW:                         number;
    playerId:                   number;
    identifier:                 string;
    value:                      number;
    point:                      number;
    minutes:                    number;
    totalPoints:                number;
    fixture:                    number;
    id:                         number;
    eventDate:                  Date; 
    updatedAt:                  Date;
}

export interface LeaguePlayerEvents {
    eventId: number;
    eventDate: Date;
    gw: number;
    playerId: string;
    identifier: string;
    value: number;
    points: number;
    minutes: number;
    totalPoints: number;
    fixture: number;
    updatedAt: Date;
    playerIdData: Element;
    managerInsights: Result[];
};