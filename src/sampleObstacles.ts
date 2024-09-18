import { getObstaclesFromCircuitJson } from "@tscircuit/infgrid-ijump-astar"
import keyboards40 from "../assets/keyboards40-multilayer-ijump.solution.json"

export const sampleObstacles = getObstaclesFromCircuitJson(keyboards40 as any)

console.log(
  sampleObstacles
    .flatMap((o) => [o.center.x, o.center.y, o.width, o.height, 1])
    .map((n) => `${n.toFixed(3)}f`)
    .join(","),
)
