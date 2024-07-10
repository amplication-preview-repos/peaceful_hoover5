import * as graphql from "@nestjs/graphql";
import { MatchResolverBase } from "./base/match.resolver.base";
import { Match } from "./base/Match";
import { MatchService } from "./match.service";

@graphql.Resolver(() => Match)
export class MatchResolver extends MatchResolverBase {
  constructor(protected readonly service: MatchService) {
    super(service);
  }
}
