import {expect} from "../test_helper"
import {CHANGE_AUTH} from "../../src/actions/types"
import {authenticate} from "../../src/actions"

describe("Actions", () => {
  describe("authenticate", () => {
    it("returns correct type of CHANGE_AUTH", () => {
      const action = authenticate()
      expect(action.type).to.be.equal(CHANGE_AUTH)
    })
    it("has a correct payload", () => {
      const action = authenticate(true)
      expect(action.payload).to.be.equal(true)
    })
  })
})
