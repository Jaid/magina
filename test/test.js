import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: magina} = indexModule

it("should run", () => {
  const result = magina()
  expect(result).toBeGreaterThan(1549410770)
})