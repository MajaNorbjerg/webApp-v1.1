// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------
import _addQuestionToGameService from "./addQuestionToGameService.js"
class AddPlayersService {
    constructor() {
        this.listOfPlayers = [];

    }
    addPlayers() {
        navigateTo('addQuestions');
        _addQuestionToGameService.showList();
        this.listOfPlayers = [];
        // loaderService.show(true);
        let myFriends = document.querySelectorAll('.myFriends');
        // let moreFriends = document.querySelectorAll('.moreFriends');

        for (const friend of myFriends) {
            this.listOfPlayers.push(friend.value);
        }
        console.log(this.listOfPlayers)
        // for (const friend of moreFriends) {
        //     this.listOfPlayers.push(friend.value);
        // }
        // loaderService.show(false);
        console.log(this.listOfPlayers)
    }
}
const _addPlayersService = new AddPlayersService();
export default _addPlayersService;