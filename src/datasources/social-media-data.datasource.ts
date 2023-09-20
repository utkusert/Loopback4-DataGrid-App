import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'socialMediaData',
  connector: 'memory',
  localStorage: 'dataKey',
  file: '/Users/utkusert/Desktop/DataGrid-App/Loopback4-Api/social-media-api/src/datasources/db.datasource.json'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class SocialMediaDataDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'socialMediaData';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.socialMediaData', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
