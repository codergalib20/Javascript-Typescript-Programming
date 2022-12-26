const longestCommonPrefix = (strs) => {
    if (!strs.length) return '';
  
    let prefix = strs[0];
  
    for (let i = strs.length; --i;) {
      for (;strs[i].indexOf(prefix) !== 0;) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (!prefix.length) return '';
      }
    }
  
    return prefix;
  };
console.log(longestCommonPrefix (["dog","racecar","car"]));


// INPUT
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

