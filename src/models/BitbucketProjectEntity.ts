import { TeamMemberEntity } from './TeamMemberEntity';

export interface BitbucketProjectEntity {
  id: number;

  bitbucketProjectId: string;

  key: string;

  name: string;

  description: string;

  url: string;

  // @Temporal(TemporalType.TIMESTAMP)
  createdAt: number;

  // Relations

  // @ManyToOne
  createdBy: TeamMemberEntity;
}
