import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MatchService } from "./match.service";
import { MatchControllerBase } from "./base/match.controller.base";

@swagger.ApiTags("matches")
@common.Controller("matches")
export class MatchController extends MatchControllerBase {
  constructor(protected readonly service: MatchService) {
    super(service);
  }
}
