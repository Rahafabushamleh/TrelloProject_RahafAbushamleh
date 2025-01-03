import { APIKey,APIToken } from "./contants.cy" 
class dataUtils{
    createBoard=(boardName)=>{
        return cy.request("POST",(`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`))

    }

    deleteBoard=(boardId)=>{
        return cy.request("DELETE",(`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`))

    }
    
    deleteCard=(cardId)=>{
        return cy.request("DELETE",(`https://api.trello.com/1/cards/${cardId}?key=${APIKey}&token=${APIToken}`))

    }

    createTemplate = (idList, templateName) => {
        return cy.request({
            method: "POST",
            url: `https://api.trello.com/1/cards?key=${APIKey}&token=${APIToken}&idList=${idList}&name=${templateName}&isTemplate=true`,
        });
    };
    

    createCard = (listId,cardName) => {
        return cy.request({
            method: "POST",
            url: `https://api.trello.com/1/cards?key=${APIKey}&token=${APIToken}&idList=${listId}&name=${cardName}`,
        });
    };
    
     getListsInBoard = (boardId) => {
        return cy.request({
            method: "GET",
            url: `https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`,
        });
    }
}
export default dataUtils;