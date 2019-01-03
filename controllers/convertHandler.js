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
    const result="";
    const lower = init 
    
    switch(initUnit) {
      case "gal":
          result = "L";
          break;
        case "L"
        
                   }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
