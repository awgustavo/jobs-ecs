import { AssignPublicIp, ECSClient, LaunchType, RunTaskCommand, RunTaskCommandInput } from "@aws-sdk/client-ecs";


const ecsClient = new ECSClient({
  region: "us-west-2"
});
export type TaskConfig = {
    command: string;
    environment: {name: string, value: string}[];
}



export async function runTask(taskConfig: TaskConfig) {
  const params: RunTaskCommandInput = {
    group: taskConfig.command,
    tags: [{key: "task", value: taskConfig.command}],
    cluster: "awsys-scraping-process-dev", // Replace with your ECS cluster name
    
    taskDefinition: "awsys-scraping-process-dev", // Replace with your ECS task definition
    launchType: LaunchType.FARGATE, // Can be "EC2" or "FARGATE"
    overrides: {
      containerOverrides: [
        {
          name: "job_example",
          command: ["npm", "run", taskConfig.command],
          memoryReservation: 512,
          cpu: 256 
          
        }
      ]
    },
    networkConfiguration: {
      awsvpcConfiguration: {
        subnets: ["subnet-06308d7a3d51292ba"], // Replace with your subnet ID(s)
        securityGroups: ["sg-0d62e230f5158cd66"], // Replace with your security group ID(s)
        assignPublicIp: AssignPublicIp.ENABLED
      }
    }
  };

  try {
    const data = await ecsClient.send(new RunTaskCommand(params));
    console.log("Success", data.tasks);
  } catch (err) {
    console.log("Error", err);
  }
}

