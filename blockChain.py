class Node:
    def __init__(self,data):
        self.data = data
        self.prevHash = None
        self.hashValue = hash(data)
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None

    def insertAtEnd(self,data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            self.prevHash = None
            self.next = None
            return
        current_node = self.head
        while current_node.next:
            current_node = current_node.next
        current_node.next = new_node
        new_node.prevHash = current_node.hashValue
    def printll(self):
        current_node = self.head
        while current_node:
            print(f"data: {current_node.data}, Hashvalue: {current_node.hashValue}, Previous Hash: {current_node.prevHash}")
            current_node = current_node.next
            
ll = LinkedList()
ll.insertAtEnd('a')
ll.insertAtEnd('b')
ll.insertAtEnd('c')
ll.insertAtEnd('d')
ll.insertAtEnd('e')
ll.insertAtEnd('f')

print("Node Data:\n")
ll.printll()

