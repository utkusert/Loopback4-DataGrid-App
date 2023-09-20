import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class SocialMedia extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  link: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SocialMedia>) {
    super(data);
  }
}

export interface SocialMediaRelations {
  // describe navigational properties here
}

export type SocialMediaWithRelations = SocialMedia & SocialMediaRelations;
