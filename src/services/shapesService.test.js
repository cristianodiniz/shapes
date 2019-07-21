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

  it("should return points format", async () =>{
    const expected = "336.91,689.36 336.91,413.91 158.97,413.91 158.97,267.82 20.44,267.82 18.97,689.36"
    const shape = new Shape(1,[
      [0.4813, 0.9848],
      [0.4813, 0.5913],
      [0.2271, 0.5913],
      [0.2271, 0.3826],
      [0.0292, 0.3826],
      [0.0271, 0.9848]
    ])

    const result = shape.coordinatesToPoints(700);

    assert.deepEqual(result, expected);
  })
});
