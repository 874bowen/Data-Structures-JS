### 📝 Problem RemoveDups:  Write code to remove duplicates from an unsorted linked list

#### Solution One
One solution to this might be to use a new Linked and a hashmap to store the values as they are being accessed. In case the value being accessed is not in the hashmap the value is added to the new LinkedList.

The complexity of this solution would be O(n) time and O(n) space. Where n is the number of items in the LinkedList.

#### Solution Two
The other solution was not to use a buffer i.e.,  store the values. Here, two pointers were used, current and next where a two iterations would take place: current which iterates through the linked list, and next which checks all subsequent nodes for duplicates.

The complexity of this would be O(n ^ 2) time. Where n is the number of items in the LinkedList.