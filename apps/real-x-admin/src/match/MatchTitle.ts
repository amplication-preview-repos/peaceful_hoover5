import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "opponent";

export const MatchTitle = (record: TMatch): string => {
  return record.opponent?.toString() || String(record.id);
};
