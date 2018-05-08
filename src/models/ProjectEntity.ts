import { TeamMemberEntity } from './TeamMemberEntity';
import { ApplicationEntity } from './ApplicationEntity';
import { BitbucketProjectEntity } from './BitbucketProjectEntity';
import { TeamEntity } from './TeamEntity';

export interface ProjectEntity {
  id: number;

  projectId: string;

  name: string;

  description: string;

  // Relations to other entities
  // @ManyToOne
  createdBy?: TeamMemberEntity;

  // @OneToOne
  bitbucketProject?: BitbucketProjectEntity;

  // @ManyToMany
  teams?: Set<TeamEntity>;

  // @OneToMany
  applications?: Set<ApplicationEntity>;

  // @OneToOne
  owningTeam?: TeamEntity;

  // @Temporal(TemporalType.TIMESTAMP)
  // createdAt?: number;
}
