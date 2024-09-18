export interface Obstacle {
  center: { x: number; y: number }
  width: number
  height: number
}

const GRID_STEP = 0.1

export function getObstacleAt(
  obstacles: Obstacle[],
  x: number,
  y: number,
  l: number,
  m?: number,
): Obstacle | null {
  m ??= GRID_STEP
  for (const obstacle of obstacles) {
    if (obstacle.l !== l) continue // Only consider obstacles on the same layer
    const halfWidth = obstacle.width / 2 + m
    const halfHeight = obstacle.height / 2 + m
    if (
      x >= obstacle.center.x - halfWidth &&
      x <= obstacle.center.x + halfWidth &&
      y >= obstacle.center.y - halfHeight &&
      y <= obstacle.center.y + halfHeight
    ) {
      return obstacle
    }
  }
  return null
}
