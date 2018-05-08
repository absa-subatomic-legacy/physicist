import { SlackDetailsEmbedded } from './SlackDetailsEmbedded';
import { TeamEntity } from './TeamEntity';

export interface TeamMemberEntity {
  id: number;

  memberId: string;

  firstName: string;

  lastName: string;

  email: string;

  domainUsername: string;

  // @Embedded
  slackDetails: SlackDetailsEmbedded;

  // @Temporal(TemporalType.TIMESTAMP)
  joinedAt: number;

  // Relations

  // @ManyToMany
  teams: Set<TeamEntity>;
}
