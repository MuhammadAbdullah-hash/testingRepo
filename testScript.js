const AWS = require("aws-sdk");
const dotenv = require('dotenv');
dotenv.config();

AWS.config.update({
    region: 'us-east-1' 
  });


var sqs = new AWS.SQS({
    region: "us-east-1",
    accessKeyId: "AKIAWYYN7M3HJSY57YN6",
    secretAccessKey: "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",
  });

const ecs = new AWS.ECS({
  region: "us-east-1",
  accessKeyId: "AKIAWYYN7M3HJSY57YN6",
  secretAccessKey: "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",
});
  


setInterval(()=>{
  console.log('... echo : this is fargate testing script ... '  , process.env.PORT)
} ,  1000 )