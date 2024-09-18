declare module "bun:ffi" {
  export function cc(params: any): { symbols: any }
}

// @ts-ignore
import programPath from "./program.c" with { type: "file" }
import { cc, ptr } from "bun:ffi"
import { sampleObstacles } from "./sampleObstacles"

export const {
  symbols: { getObstacleAtWithCDirect },
} = cc({
  source: programPath,
  include: ["/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include"],
  symbols: {
    getObstacleAtWithCDirect: {
      returns: "int",
      args: ["ptr", "int", "float", "float", "float", "float"],
    },
  },
})

const obstacleArray = new Float64Array(
  sampleObstacles.flatMap((obs) => [
    obs.center.x,
    obs.center.y,
    obs.width,
    obs.height,
    1,
  ]),
)

export const obstacleArrayPtr = ptr(obstacleArray)
