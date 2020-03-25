function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
  var newNode = new Node(value, this.head, null);

  //If head node exists, update prev value as newNode
  if(this.head) this.head.prev = newNode;
  //else(meaning list is empty), assign newNode as tail as well
  else this.tail = newNode;
  
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value, null, this.tail);

  //If tail node exists, update next value as newNode
  if(this.tail) this.tail.next = newNode;
  //else(meaning list is empty)m assign newNode as head as well
  else this.head = newNode;
  
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function(){
  if(!this.head) return null;

  var val = this.head.value;

  //Assign next value as new head
  this.head = this.head.next;

  //If new head node is not null, assign null to prev
  if(this.head) this.head.prev = null;
  //If list is empty, also assign tail as null
  else this.tail = null;

  return val;
}

LinkedList.prototype.removeTail = function(){
  if(!this.tail) return null;

  var val = this.tail.value;

  //Assign prev value as new tail
  this.tail = this.tail.prev;

  //If new tail node is not null, assign null to next
  if(this.tail) this.tail.next = null;
  //If list is empty, also assign tail as null
  else this.head = null;

  return val;
}

LinkedList.prototype.search = function(searchValue){
  var currentNode = this.head;
  while(currentNode){
    if(currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
}

