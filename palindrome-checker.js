function palindrome(str) {
  return str.replace(/\W|_/g,'')
      .toLowerCase()
      .split('')
      .every(
        (item,ind,arr)=>
        item===arr[arr.length-1-ind]
      );
}
