describe('Test Delete All Boards', () => {
    const workspaceId = 'rahafwokspace';  
    it('should delete all boards in the workspace', () => {
      cy.deleteAllBoards(workspaceId);
    });
  });
  