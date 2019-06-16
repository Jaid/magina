import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {ensureArray, ensureObject} = indexModule

it("should run", () => {
  expect(ensureArray("abc")).toStrictEqual(["abc"])
  expect(ensureObject(300, "speed")).toStrictEqual({speed: 300})
})

it("should run without changes", () => {
  expect(ensureArray(["abc"])).toStrictEqual(["abc"])
  expect(ensureObject({speed: 300}, "speed")).toStrictEqual({speed: 300})
})


it("should run without arguments", () => {
  expect(ensureArray()).toStrictEqual([])
  expect(ensureObject()).toStrictEqual({})
})