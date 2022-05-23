function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

function mergeTwoLists(list1,list2){

    if(!list1){
        arr1=[]
    }else{
        arr1 =[list1.val];
    }
    
    if(Object.keys(list2).length===0){
        arr2=[]
    }else{
        arr2 = [list2.val];
    }
    

    while(list1.next !== null){
        list1 = list1.next;
        arr1.push(list1.val)
    }

    while(list2.next !== null){
        list2 = list2.next;
        arr1.push(list2.val)
    }

    const combinedList = arr1.concat(arr2)

    let head = combinedList.reverse().reduce((acc, curr) => {
        if (acc == null) {
          acc = new ListNode(curr);
      
        } else {
          acc = new ListNode(curr, acc);
        }
        return acc;
      }, null);

    return head;
}

n1= {}
if(Object.keys(n1).length===0){
    console.log('true')
}
// const list1 = [], list2 = [0]
// console.log(mergeTwoLists(list1,list2))