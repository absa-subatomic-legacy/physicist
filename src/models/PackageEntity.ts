import { TeamMemberEntity } from './TeamMemberEntity';
import { ProjectEntity } from './ProjectEntity';
import { PackageType } from './PackageType';

export interface PackageEntity {
  id: number;

  // @Enumerated(EnumType.STRING)
  packageType: PackageType;

  applicationId: string;

  name: string;

  description: string;

  // @Temporal(TemporalType.TIMESTAMP)
  createdAt: number;

  // @ManyToOne
  createdBy: TeamMemberEntity;

  // @ManyToOne
  project: ProjectEntity;
}
