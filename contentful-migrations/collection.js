module.exports = function (migration, context) {
  const collection = migration
    .createContentType("collection")
    .name("Collection")
    .displayField("title");

  collection.createField("title").name("Title").type("Symbol").required(true);
  collection.createField("subtitle").name("Subtitle").type("Symbol");
  collection.createField("handle").name("Handle").type("Symbol");
  collection
    .createField("thumbnail")
    .name("Thumbnail")
    .type("Link")
    .linkType("Asset");
  collection.createField("description").name("Description").type("Text");
  collection.createField("type").name("Type").type("Symbol");
  collection.createField("medusaId").name("Medusa ID").type("Symbol");
};
