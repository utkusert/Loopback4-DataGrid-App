import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SocialMediaDataDataSource} from '../datasources';
import {SocialMedia, SocialMediaRelations} from '../models';

export class SocialMediaRepository extends DefaultCrudRepository<
  SocialMedia,
  typeof SocialMedia.prototype.id,
  SocialMediaRelations
> {
  constructor(
    @inject('datasources.socialMediaData') dataSource: SocialMediaDataDataSource,
  ) {
    super(SocialMedia, dataSource);
  }
}
