module.exports = function (migration, context) {
  const productImages = migration.createContentType("productImages").name("Product Images");
  productImages
    .createField("url")
    .name("url")
    .type("Link")
    .linkType("Asset");

  productImages.createField("medusaId").name("Medusa ID").type("Symbol");
};
