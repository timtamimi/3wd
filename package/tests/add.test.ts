import { parseDate, parseString } from "../src";

describe("parseDate", () => {
  test("parses a known date", () => {
    const result = parseDate(new Date("2000-01-01"));
    expect(result).toBe("toe.engine.bells");
  });

  test("returns an error for an unknown date", () => {
    const result = parseDate(new Date("1010-01-01"));
    expect(result).toBe("error.error.error");
  });
});

describe("parseString", () => {
  test("parses a known string", () => {
    const result = parseString("toe.engine.bells");
    expect(result).toStrictEqual(new Date("2000-01-01"));
  });
});
