const { s3client, ListObjectsCommand } = require("./s3");

const init = async () => {
  console.log(`
 _____             _               ____             _                
|  __ \\           | |             |  _ \\           | |               
| |  | | ___   ___| | _____ _ __  | |_) | __ _  ___| | ___   _ _ __  
| |  | |/ _ \\ / __| |/ / _ \\ '__| |  _ < / _' |/ __| |/ / | | | '_ \\ 
| |__| | (_) | (__|   <  __/ |    | |_) | (_| | (__|   <| |_| | |_) |
|_____/ \\___/ \\___|_|\\_\\___|_|    |____/ \\__,_|\\___|_|\\_ \\__,_| .__/ 
                                                              | |    
                                                              |_|    
`);
  console.log("[TEST] Environment variables");
  if (process.env.DO_BA_S3) {
    console.log("  [S3]   'DO_BA_S3 = true', testing S3 config");

    let code = await s3client.send(
      new ListObjectsCommand({
        Bucket: process.env.DO_BA_S3_BUCKET,
      })
    );

    if (code.$metadata.httpStatusCode != 200) {
      console.log("[S3 ERROR] Http status code: " + code);
      process.exit(1);
    }
    console.log("  [S3]   Config OK");
  }
};

init();
