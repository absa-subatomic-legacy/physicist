import { HalResource, HalProperty } from 'hal-rest-client';

/**
 * The Project interface defines properties of instance
 */
export interface Project {
  projectId: number;
  name: string;
  description: string;
}

/**
 * The ProjectEntity available as HalResource
 */
export class ProjectEntity extends HalResource implements Project {
  @HalProperty() public projectId;

  @HalProperty() public name;

  @HalProperty() public description;
}

/**
 * Array of ProjectEntities available as HalResource
 */
export class ProjectEntities extends HalResource {
  @HalProperty(ProjectEntity) public projectEntities: Array<ProjectEntity>;
}
