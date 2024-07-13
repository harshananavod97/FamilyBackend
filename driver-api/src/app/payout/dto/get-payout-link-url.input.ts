import { ID, InputType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType()
export class GetPayoutLinkUrlInput {
  @IDField(() => ID)
  gatewayId: number;
}
