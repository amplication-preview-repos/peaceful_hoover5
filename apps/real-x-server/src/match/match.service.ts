import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MatchServiceBase } from "./base/match.service.base";

@Injectable()
export class MatchService extends MatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
