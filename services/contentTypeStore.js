import {getClient} from './contentfulClient'

let contentTypesStorage

function getContentTypes () {
  return getClient().getContentTypes()
    .then((response) => {
      return response;
    })
}

function findContentTypeInList (contentTypes, id) {
  return contentTypes.items.find((item) => item.sys.id === id)
}

function findContentType (id) {
  return getContentTypes()
  .then((contentTypes) => findContentTypeInList(contentTypes, id))
}

export {
  getContentTypes,
  findContentTypeInList,
  findContentType
}