const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");

const s3client = new S3Client({
  endpoint: process.env.DO_BA_S3_ENDPOINT,
  region: "us",
  credentials: {
    accessKeyId: process.env.DO_BA_S3_ACESS_KEY_ID,
    secretAccessKey: process.env.DO_BA_S3_SECRET_ACESS_KEY,
  },
});

module.exports = { s3client, ListObjectsCommand };
