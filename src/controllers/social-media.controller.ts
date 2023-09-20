import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {SocialMedia} from '../models';
import {SocialMediaRepository} from '../repositories';

export class SocialMediaController {
  constructor(
    @repository(SocialMediaRepository)
    public socialMediaRepository : SocialMediaRepository,
  ) {}

  @post('/social-medias')
  @response(200, {
    description: 'SocialMedia model instance',
    content: {'application/json': {schema: getModelSchemaRef(SocialMedia)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SocialMedia, {
            title: 'NewSocialMedia',
            exclude: ['id'],
          }),
        },
      },
    })
    socialMedia: Omit<SocialMedia, 'id'>,
  ): Promise<SocialMedia> {
    return this.socialMediaRepository.create(socialMedia);
  }

  @get('/social-medias/count')
  @response(200, {
    description: 'SocialMedia model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SocialMedia) where?: Where<SocialMedia>,
  ): Promise<Count> {
    return this.socialMediaRepository.count(where);
  }

  @get('/social-medias')
  @response(200, {
    description: 'Array of SocialMedia model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SocialMedia, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SocialMedia) filter?: Filter<SocialMedia>,
  ): Promise<SocialMedia[]> {
    return this.socialMediaRepository.find(filter);
  }

  @patch('/social-medias')
  @response(200, {
    description: 'SocialMedia PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SocialMedia, {partial: true}),
        },
      },
    })
    socialMedia: SocialMedia,
    @param.where(SocialMedia) where?: Where<SocialMedia>,
  ): Promise<Count> {
    return this.socialMediaRepository.updateAll(socialMedia, where);
  }

  @get('/social-medias/{id}')
  @response(200, {
    description: 'SocialMedia model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SocialMedia, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(SocialMedia, {exclude: 'where'}) filter?: FilterExcludingWhere<SocialMedia>
  ): Promise<SocialMedia> {
    return this.socialMediaRepository.findById(id, filter);
  }

  @patch('/social-medias/{id}')
  @response(204, {
    description: 'SocialMedia PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SocialMedia, {partial: true}),
        },
      },
    })
    socialMedia: SocialMedia,
  ): Promise<void> {
    await this.socialMediaRepository.updateById(id, socialMedia);
  }

  @put('/social-medias/{id}')
  @response(204, {
    description: 'SocialMedia PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() socialMedia: SocialMedia,
  ): Promise<void> {
    await this.socialMediaRepository.replaceById(id, socialMedia);
  }

  @del('/social-medias/{id}')
  @response(204, {
    description: 'SocialMedia DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.socialMediaRepository.deleteById(id);
  }
}
