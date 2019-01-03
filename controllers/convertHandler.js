/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    return parseFloat(input);
  };
  
  this.getUnit = function(input) {
    const num = this.getNum(input); 
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
        result = "invalid number"; 
      }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const from = this.spellOutUnit(initUnit);
    const to = this.spellOutUnit(returnUnit);
    var result = `${initNum} ${from} converts to ${returnNum} ${to}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
