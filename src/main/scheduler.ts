import { runTask } from "../providers/ecs-task";

export const startJobs = () => {
    console.log("Starting Jobs");
    setInterval(async () => {

        console.log("Running heavy jobs");
        await runTask({
            command: "heavy-jobs",
            environment: [
                {
                    name: "ENV_VAR_NAME",
                    value: "ENV_VAR_VALUE"
                }
            ]
        });
        console.log("Light jobs finished");
    }, 1000*60);

    setInterval(async () => {
        console.log("Running light jobs");
        await runTask({
            command: "light-jobs",
            environment: [
                {
                    name: "ENV_VAR_NAME",
                    value: "ENV_VAR_VALUE"
                }
            ]
        });

        console.log("Heavy jobs finished");
    }, 1000*70);
}

startJobs();