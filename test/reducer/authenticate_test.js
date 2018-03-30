import {expect} from "../test_helper"
import {CHANGE_AUTH} from "../../src/actions/types"
import authenticationReducer from "../../src/reducers/authentication"

describe("Authenticate Reducer", () => {
  it("default value of authenticate", () => {
    expect(authenticationReducer(undefined, {})).to.eql(false)
  })
  it("changes the status of authentication", () => {
    const action = {type: CHANGE_AUTH, payload: true}
    expect(authenticationReducer(false, action)).to.be.equal(true)
  })
})
