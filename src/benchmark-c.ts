import now from "performance-now"
import { sampleObstacles } from "./sampleObstacles"
import {
  getObstacleAtWithCDirect,
  obstacleArrayPtr,
} from "./getObstacleAtWithC"

const points = Array.from({ length: 10_000 }, () => ({
  x: Math.random() * 100 - 50,
  y: Math.random() * 100 - 50,
}))

const start = now()
for (const point of points) {
  getObstacleAtWithCDirect(
    obstacleArrayPtr,
    sampleObstacles.length,
    point.x,
    point.y,
    1,
    0.1,
  )
}
const end = now()

console.log(`Time taken: ${(end - start).toFixed(4)}ms`)
