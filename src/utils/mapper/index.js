import config from "../../config";

// this was used for firebase data mapping
const mapBooks = (payload) => {
  const { documents } = payload;
  return documents.map(book => {
    const { fields } = book;
    return {
      author: fields.author.stringValue,
      isbn: fields.isbn.stringValue,
      title: fields.title.stringValue,
      uri: fields.uri !== undefined ? fields.uri.stringValue : config.defaultCover
    }
  });
};

export default {
  mapBooks
};