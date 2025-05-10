describe('Google Maps Search Demo', () => {
  it('should search for an address and display a marker', () => {
    // Visit the test page
    cy.visit('http://localhost:8080/index.html');

    // Wait for the Google Map to load
    cy.wait(1000);

    // Enter address and trigger geocoding
    cy.get('#addressInput').type('Hanoi, Vietnam');
    cy.contains('Search').click();

    // Wait for the marker to be placed
    cy.wait(2000);

    // Directly check if marker object exists and is attached to the map
    cy.window().then((win) => {
      expect(win.marker).to.exist;
      expect(win.marker.getMap()).to.not.be.null;
    });
  });
});
