import {formatCurrency, formatPercent} from "./formatters"

describe('#formatCurrency', ()=>{
  it('should format number to USD string correctly', ()=> {
    expect(formatCurrency(12345.6789)).toEqual('$12,345.68');
  });
});

describe('#formatPercent', ()=>{
  it('should format number to percent string correctly', ()=> {
    expect(formatPercent(0.4)).toEqual('40%');
    expect(formatPercent(0.45678)).toEqual('45.68%');
  });
});




