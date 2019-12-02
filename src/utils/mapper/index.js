const mapBooks = (payload) => {
  const { documents } = payload;
  return documents.map(book => {
    const { fields } = book;
    return {
      author: fields.author.stringValue,
      isbn: fields.isbn.stringValue,
      title: fields.title.stringValue,
      uri: fields.uri.stringValue,
    }
  });
};

export default {
  mapBooks
};