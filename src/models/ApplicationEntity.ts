import { ProjectEntity } from './ProjectEntity';
import { TeamMemberEntity } from './TeamMemberEntity';
import { BitbucketRepositoryEmbedded } from './BitbucketRepositoryEmbedded';
import { ApplicationType } from './ApplicationType';

export interface ApplicationEntity {
  id: number;

  applicationId: string;

  name: string;

  description: string;

  // @Enumerated(EnumType.STRING)
  applicationType: ApplicationType;

  // @Embedded
  // @AttributeOverride(name = "name", column = @Column(name = "bitbucket_repo_name"))
  bitbucketRepository: BitbucketRepositoryEmbedded;

  // @Temporal(TemporalType.TIMESTAMP)
  createdAt: number;

  // Relations

  // @OneToOne
  project: ProjectEntity;

  // @ManyToOne
  createdBy: TeamMemberEntity;
}
