import { TeamMemberEntity } from './TeamMemberEntity';
import { MembershipRequestStatus } from './MembershipRequestStatus';

export interface MembershipRequestEntity {
  id: number;

  membershipRequestId: string;

  teamId: string;

  // @OneToOne
  requestedBy: TeamMemberEntity;

  // @OneToOne
  approvedBy: TeamMemberEntity;

  requestStatus: MembershipRequestStatus;
}
