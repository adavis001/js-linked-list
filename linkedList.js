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
		console.log(currentNode);
		return currentNode;
	}
	function remove(number) {

	}
	function insert(value, number) {

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


