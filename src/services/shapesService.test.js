import assert from "assert";

import { Shape, convertFromArrayToShapes, getShapes } from "./shapesService";

describe("Shapes Tests", function() {
  const arrayMock = [
    [
      [0.4813, 0.9848],
      [0.4813, 0.5913],
      [0.2271, 0.5913],
      [0.2271, 0.3826],
      [0.0292, 0.3826],
      [0.0271, 0.9848]
    ],
    [
      [0.4813, 0.9848],
      [0.4813, 0.5913],
      [0.2271, 0.5913],
      [0.2271, 0.3826],
      [0.0292, 0.3826],
      [0.0271, 0.9848]
    ]
  ];

  it("should return a shape object", async () => {
    const expected = { name: "Zone  2", id: 1, coordinates: [0.4813, 0.9848] };
    const result = new Shape(
      1,
      [0.4813, 0.9848],
      [0.4813, 0.5913],
      [0.2271, 0.5913]
    );
    assert.deepEqual(result, expected);
  });

  it("should return a list of shape", async () => {
    const expected = [
      {
        coordinates: [
          [0.4813, 0.9848],
          [0.4813, 0.5913],
          [0.2271, 0.5913],
          [0.2271, 0.3826],
          [0.0292, 0.3826],
          [0.0271, 0.9848]
        ],
        id: 0,
        name: "Zone  1"
      },
      {
        coordinates: [
          [0.4813, 0.9848],
          [0.4813, 0.5913],
          [0.2271, 0.5913],
          [0.2271, 0.3826],
          [0.0292, 0.3826],
          [0.0271, 0.9848]
        ],
        id: 1,
        name: "Zone  2"
      }
    ];
    const result = convertFromArrayToShapes(arrayMock);
    assert.deepEqual(result, expected);
  });
});
