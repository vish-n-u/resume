class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addData(data) {
    if (this.head == null) {
      let newNode = new Node(data);
      this.head = newNode;
      this.tail = newNode;
    } else {
      let newNode = new Node(data);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  readData() {
    let currNode = this.head;

    while (currNode != null) {
      console.log(currNode.val);
      currNode = currNode.next;
    }
  }
}

const l1 = new LL();
l1.addData(9);
l1.addData(9);
l1.addData(9);
l1.addData(9);
l1.addData(9);
l1.addData(9);
l1.addData(9);

const l2 = new LL();

l2.addData(9);
l2.addData(9);
l2.addData(9);
l2.addData(9);
// var addTwoNumbers = function (l1, l2) {
//   let arr1 = [];
//   let arr2 = [];
//   let currNode1 = l1;
//   let x = 0;
//   while (true) {
//     arr1.push(currNode1.val);
//     currNode1 = currNode1.next;
//     x++;
//     if (currNode1 == null) break;
//   }
//   let y = 0;
//   let currNode2 = l2;
//   while (true) {
//     arr2.push(currNode2.val);
//     currNode2 = currNode2.next;
//     y++;
//     if (currNode2 == null) break;
//   }
//   let diff =
//     arr1.length > arr2.length
//       ? arr1.length - arr2.length
//       : arr2.length - arr1.length;
//   arr1 = arr1.reverse();
//   arr2.reverse();
//   if (arr1.length < arr2.length) {
//     let newArr = new Array(diff);
//     newArr.fill(0);
//     arr1 = newArr.concat(arr1);
//   } else if (arr2.length < arr1.length) {
//     let newArr = new Array(diff);
//     newArr.fill(0);
//     arr2 = newArr.concat(arr2);
//   }
//   console.log(arr1, arr2);

//   let sumArr = [];
//   let carryForward = 0;
//   let z = 0;
//   for (z = arr1.length - 1; z >= 0; z--) {
//     let sum = arr2[z] + arr1[z] + carryForward;

//     if (sum >= 10) {
//       sumArr[z] = sum - 10;
//       carryForward = 1;
//     } else {
//       sumArr[z] = sum;
//       carryForward = 0;
//     }
//   }
//   if (carryForward == 1) {
//     sumArr.unshift(1);
//   }
//   sumArr.reverse();
//   let newLL = new LL();
//   for (let x = 0; x < sumArr.length; x++) {
//     newLL.addData(sumArr[x]);
//   }
//   console.log(sumArr);
//   return newLL.head;
// };

var addTwoNumbers = (l1, l2) => {
  let sumNode = new LL();
  let currNode1 = l1;
  let currNode2 = l2;
  let carryForward = 0;
  while (true) {
    let sum = (currNode1.val || 0) + (currNode2.val || 0) + carryForward;
    console.log(sum, currNode1.val, currNode2.val);
    if (currNode1.next != null) {
      currNode1 = currNode1.next;
    } else currNode1.val = undefined;
    if (currNode2.next != null && currNode2.val != undefined) {
      currNode2 = currNode2.next;
    } else currNode2.val = undefined;

    if (sum >= 10) {
      carryForward = 1;
      sum = sum - 10;
    } else {
      carryForward = 0;
    }
    sumNode.addData(sum);
    if (currNode1.val == undefined && currNode2.val == undefined) break;
  }
  if (carryForward == 1) {
    sumNode.addData(1);
  }
 
  return sumNode.head;
};

console.log(addTwoNumbers(l1.head, l2.head));
