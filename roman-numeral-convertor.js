function convertToRomanLooping(num) {
    let map = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let romanNumeral = '';
    for(let key in map){  	      
      while(num >= map[key]){
        romanNumeral += key;
        num -= map[key];
      }
    }
    return romanNumeral;
  };
  
  function convertToRomanLoopless(num) {
  if(num>=1000) return "M".concat(convertToRoman(num-1000))
  if(num>=900) return "CM".concat(convertToRoman(num-900))
  if(num>=500) return "D".concat(convertToRoman(num-500))
  if(num>=400) return "CD".concat(convertToRoman(num-400))
  if(num>=100) return "C".concat(convertToRoman(num-100))
  if(num>=90) return "XC".concat(convertToRoman(num-90))
  if(num>=50) return "L".concat(convertToRoman(num-50))
  if(num>=40) return "XL".concat(convertToRoman(num-40))
  if(num>=10) return "X".concat(convertToRoman(num-10))
  if(num>=9) return "IX".concat(convertToRoman(num-9))
  if(num>=5) return "V".concat(convertToRoman(num-5))
  if(num>=4) return "IV".concat(convertToRoman(num-4))
  if(num>=1) return "I".concat(convertToRoman(num-1))
  return ''
}

function convertToRomanRecursive(
  num, 
  map = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]]
  ){
    console.log(map);
    if (!map.length) return "";
    if(num>=map[0][1])
        return map[0][0]+convertToRoman(num-map[0][1],map);
    else return ""+convertToRoman(num,map.slice(1))
  };
