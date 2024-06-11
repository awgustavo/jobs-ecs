import { sleep } from "../shared/utils/timer";

export async function runLightIntegrations()  {
    console.log("Running light integrations");
    await sleep(40000)
    console.log("Light integrations finished")
}

runLightIntegrations();