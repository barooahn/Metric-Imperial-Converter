/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.isFraction = function(input) {
    const regex = /^\d+\/\d+/g;
    console.log(input.match(regex));
   if(input.match(regex) == 1) {
      return input.match(regex)[0];
    }
    return null;
  };
  
  this.getIndex = function(input) {
    const regex = /[A-Za-z]/;
    const index = input.match(regex);
    if(index) {return index.index}
    else {return null};
  };
  
  this.getNum = function(input) {
    let result = 'invalid number';
    const badFraction = /(\/)+/g;    
    if(badFraction.test(input)) {
      console.log('here');
      if(input.match(badFraction).length > 1){
      console.log(input.match(badFraction).length);
      return result;
      }
    }
    console.log('check index');
    const index = this.getIndex(input);
    console.log('index', this.getIndex(input));
    if (index > 0) {
      result = input.substring(0, index);  
    } else if (index === 0 && this.getUnit(input) !== "invalid unit"){
      result = 1;
    }  else {
      return result;
    }
    return Math.floor(Number(eval(result))*100000)/100000;
  };
  
  this.getUnit = function(input) {
      // let num = this.isFraction(input);
      // if(!num) {num = this.getNum(input)}; 
      // console.log('num', num);
      // const result = input.replace(num, ''); 
    let result = "invalid unit";
    const index = this.getIndex(input);
    if (index >= 0 && this.getReturnUnit(input.substring(index))!=="invalid unit"){
      result = input.substring(index);  
    } 
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result="";
    const lower = initUnit.toLowerCase(); 
    switch(lower) {
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "Kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;        
      default:
        result = "invalid unit"; 
      }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result="";
    const lower = unit.toLowerCase(); 
    switch(lower) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "litres";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;        
      default:
        result = "invalid unit"; 
      }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = '';
    const lower = initUnit.toLowerCase(); 
    switch(lower) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;        
      default:
        result = 'invalid unit'; 
      }
    return Math.floor(result*100000)/100000;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const from = this.spellOutUnit(initUnit);
    const to = this.spellOutUnit(returnUnit);
    var result = `${initNum} ${from} converts to ${returnNum.toFixed(5)} ${to}`;
    return result;
  };
  
};

module.exports = ConvertHandler;
