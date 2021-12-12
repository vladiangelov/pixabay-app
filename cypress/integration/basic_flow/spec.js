describe("Example test", () => {
  before(() => {
    cy.signIn()
  })

  after(() => {
    cy.clearLocalStorageSnapshot()
    cy.clearLocalStorage()
  })

  beforeEach(() => {
    cy.restoreLocalStorage()
  })

  afterEach(() => {
    cy.saveLocalStorage()
  })

  it("should be logged in and app should be visible", () => {
    cy.intercept("GET", "https://pixabay.com/api/*", {
      fixture: "photos_response.json",
    }).as("getPhotos")
    cy.visit("/")

    cy.wait(["@getPhotos"])

    cy.getVisibleByDataAttr("pixabay-react-app").should("be.visible")
  })
})

// TODO: Write additional tests:
// 1. Testing the pagination
// 2. Testing the folders
// 3. Testing logging out
// 4. Testing the preview pop-up open and close
