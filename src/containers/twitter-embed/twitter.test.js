const rewire = require("rewire")
const twitter = rewire("./twitter")
const timeOut = twitter.__get__("timeOut")
// @ponicode
describe("timeOut", () => {
    test("0", () => {
        let callFunction = () => {
            timeOut()
        }
    
        expect(callFunction).not.toThrow()
    })
})
