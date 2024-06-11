import { sleep } from "../shared/utils/timer";

export async function runHeavyIntegrations()  {
    console.log("Running heavy integrations");
    await sleep(60000)
    console.log("Heavy integrations finished")
}

runHeavyIntegrations();