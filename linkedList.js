/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
	var head = null;
	var tail = null;

	function getHead(){
		return head;
	}
	function getTail() {
		return tail;
	}
	function add(value) {
		var newNode = {
			value: value,
			next: null
		};
		 if(head === null && tail === null) {
		 	head = newNode;
		 	tail = newNode;
		 } else {
		 	tail.next = newNode;
		 	tail = newNode;
		 }
		 return newNode;
	}
	function get(number) {
		var currentNode = head;

		for(i = 0; i<number; i++){
			if (currentNode.next === null) {
				return false;
			}
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	function remove(number) {
		var prevNode = get(number - 1);
		var postNode = get(number + 1);
		if(postNode=== false){
			prevNode.next = null;
			tail = prevNode;
		} if(number === 0){
			head = postNode;
		} if(get(number) === false){
			return false;
		}
		prevNode.next = postNode;
	}
	function insert(value,number) {
      var insertedNode = {
        value: value,
        next: null
      };
      var backNode = get(number - 1);
      var firstNode = get(number + 1);
      if(number === 0 ) {
        insertedNode.next = head;
        head = insertedNode;
      }
      else if(number < 0 || get(number) === false) {
        return false;

     } else {
        insertedNode.next  = get(number);
        backNode.next = insertedNode;
      }
    }

	return {
		getHead: getHead,
		getTail: getTail,
		add: add,
		remove: remove,
		get: get,
		insert: insert,
	};
}


