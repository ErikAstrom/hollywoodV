import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Hollywood V Content Studio')
    .items(
      S.documentTypeListItems()
    )