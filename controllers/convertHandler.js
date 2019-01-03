/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.isFraction = function(input) {
    const regex = /^\d+\/\d+/;
    if(input.match(regex) !==null) {
      return input.match(regex)[0];
    }
    return null;
  };
  
  this.getNum = function(input) {
    let result = this.isFraction(input);
    if(result) {
      return eval(result);
    }    
    result = parseFloat(input);
    if(result) { return result } else { return 1};
  };
  
  this.getUnit = function(input) {
      let num = this.isFraction(input);
      if(!num) {num = this.getNum(input)}; 
      console.log('num', num);
      const result = input.replace(num, ''); 
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
    let result="";
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
    if(this.convert(initNum, initUnit) == 'invalid number and unit') return 'invalid number and unit'; 
    const from = this.spellOutUnit(initUnit);
    const to = this.spellOutUnit(returnUnit);
    var result = `${initNum} ${from} converts to ${returnNum.toFixed(5)} ${to}`;
    return result;
  };
  
};

module.exports = ConvertHandler;
