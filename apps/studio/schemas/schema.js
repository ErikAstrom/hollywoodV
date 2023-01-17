// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import figure from './objects/shared/figure'
import page from './documents/page'
import meta from './objects/shared/meta'
import config from './documents/config'
import event from './documents/event'
import hero from './objects/hero'
import link from './objects/shared/link'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import button from './objects/shared/button'
import services from './objects/services'
import preview from './objects/preview'
import logos from './objects/logos'
import contact from './objects/contact'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
//Documents
    config,
    page,
    event,
//Objects
    meta,
    figure,
    hero,
    services,
    preview,
    logos,
    contact,
//Layout
    link,
    button
  ]),
})
