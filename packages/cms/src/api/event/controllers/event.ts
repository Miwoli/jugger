/**
 * event controller
 */

import { factories } from '@strapi/strapi'
import { parseMultipartData } from '@strapi/utils'

export default factories.createCoreController(
  'api::event.event',
  ({ strapi }) => ({
    async create(ctx) {
      let entity
      if (ctx.is('multipart')) {
        const { data, files } = parseMultipartData(ctx)
        data.CreatedBy = ctx.state.user.id
        entity = await strapi.services.event.create(data, { files })
      } else {
        ctx.request.body.data.CreatedBy = ctx.state.user.id
        entity = await strapi
          .service('api::event.event')
          .create(ctx.request.body)
      }

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
      return this.transformResponse(sanitizedEntity)
    },

    async find() {
      const entries = await strapi.entityService.findMany('api::event.event', {
        populate: {
          CreatedBy: {
            fields: ['username']
          },
          repeatableComponent: {
            populate: {
              CreatedBy: {
                fields: ['username']
              }
            }
          }
        }
      })

      return this.transformResponse(entries)
    }
  })
)
