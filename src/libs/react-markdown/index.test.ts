import * as Target from ".";

describe("parseCodeClassName", () => {
  const fn = Target.parseCodeClassName;
  test("className: language-lang:fileName.ext", () =>
    expect(fn("language-lang:fileName.ext")).toEqual({
      language: "lang",
      fileName: "fileName.ext",
    }));
  test("className: language-lang", () =>
    expect(fn("language-lang")).toEqual({
      language: "lang",
      fileName: undefined,
    }));
  test("className: language-:fileName", () =>
    expect(fn("language-:fileName")).toEqual({
      language: undefined,
      fileName: "fileName",
    }));
  test("className: language-:fileName.ext", () =>
    expect(fn("language-:fileName.ext")).toEqual({
      language: undefined,
      fileName: "fileName.ext",
    }));
  test("className: undefined", () =>
    expect(fn(undefined)).toEqual({
      language: undefined,
      fileName: undefined,
    }));
  test("className: empty string", () =>
    expect(fn("")).toEqual({
      language: undefined,
      fileName: undefined,
    }));
  test("className: unexpected format", () =>
    expect(fn("ABC")).toEqual({
      language: undefined,
      fileName: undefined,
    }));
});
