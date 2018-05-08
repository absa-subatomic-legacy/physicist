import { TeamMemberEntity } from './TeamMemberEntity';
import { SlackDetailsEmbedded } from './SlackDetailsEmbedded';
import { MembershipRequestEntity } from './MembershipRequestEntity';

export interface TeamEntity {
  id: number;

  teamId: string;

  name: string;

  description: string;

  // @Embedded
  slackDetails: SlackDetailsEmbedded;

  // @Temporal(TemporalType.TIMESTAMP)
  createdAt: number;

  // Relations

  // @ManyToOne
  createdBy: TeamMemberEntity;

  // @ManyToMany
  members: Set<TeamMemberEntity>;

  // @ManyToMany
  owners: Set<TeamMemberEntity>;

  // @OneToMany
  membershipRequests: Set<MembershipRequestEntity>;
}
