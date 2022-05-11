#! /usr/bin/env node

require("dotenv").config();

const { runMigration } = require("contentful-migration");

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  yes: true,
};

const migrations = async () => {
  try {
    await runMigration({
      ...options,
      ...{ filePath: `${__dirname}/link.js` },
    });
  } catch (error) {
    
  }
  try {
    await runMigration({
      ...options,
      ...{ filePath: `${__dirname}/hero.js` },
    });
  } catch (error) {
    
  }
  try {
    await runMigration({
      ...options,
      ...{ filePath: `${__dirname}/navigation-item.js` },
    });
  } catch (error) {
    
  }
  try {
    await runMigration({
      ...options,
      ...{ filePath: `${__dirname}/navigation-menu.js` },
    });
  } catch (error) {
    
  }
  try {
    await runMigration({
      ...options,
      ...{ filePath: `${__dirname}/product-variant.js` },
    });
  } catch (error) {
    
  }
  try {
    await runMigration({
      ...options,
      ...{ filePath: `${__dirname}/product.js` },
    });
  } catch (error) {
    
  }
  try {
    await runMigration({
      ...options,
      ...{ filePath: `${__dirname}/region.js` },
    });
  } catch (error) {
    
  }
  try {
    await runMigration({
      ...options,
      ...{ filePath: `${__dirname}/tile.js` },
    });
  } catch (error) {
    
  }
 try {
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/tile-section.js` },
  });
 } catch (error) {
   
 }
 try {
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/page.js` },
  });
 } catch (error) {
   
 }
 try {
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/product-images.js` },
  });
 } catch (error) {
   
 }
 try {
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/collection.js` },
  });
 } catch (error) {
   
 }
};

migrations();
