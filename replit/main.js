function scramble(str1, str2) {
    str1 = str1.split("");
    for(const letter of str2){
      const index = str1.indexOf(letter)
      if(index === -1) return false;
      else str1.splice(index, 1);
    }
    return true;
  }

console.log(scramble('rkqodlw','world'))