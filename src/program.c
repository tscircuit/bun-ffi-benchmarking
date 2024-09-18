#include <stdio.h>
#include <stdlib.h>

/**
 * Obstacles is a 2d array of floats with the following structure:
 * [
 *   x, y, width, height, layer
 * ]
 */
int getObstacleAtWithCDirect(float* obstacles, int numObstacles, float x, float y, float l, float m) {
    for (int i = 0; i < numObstacles; i++) {
        if (obstacles[i + 4] != l) continue;  // Only consider obstacles on the same layer

        float centerX = obstacles[i + 0];
        float centerY = obstacles[i + 1];
        float width = obstacles[i + 2];
        float height = obstacles[i + 3];

        float halfWidth = width / 2 + m;
        float halfHeight = height / 2 + m;

        if (x >= centerX - halfWidth &&
            x <= centerX + halfWidth &&
            y >= centerY - halfHeight &&
            y <= centerY + halfHeight) {
            return i;  // Return the index of the found obstacle
        }
    }

    return -1;  // Return -1 if no obstacle is found
}