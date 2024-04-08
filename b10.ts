function parseNumber(str: string): number | null {
    const num=parseFloat(str);
    return isNaN(num) ? null : num;
} 
function tinh(a1: number|string, b1: number | string,operator: string){
    let a2 :number|null =typeof a1==='string'?parseNumber(a1):a1;
    let b2 :number|null = typeof b1 === 'string' ? parseNumber(b1) : b1;
    if (a2 === null || b2 === null) {
        return 'Không hợp lệ';
    }
    switch (operator) {
        case '+':
            return a2 + b2;
        case '-':
            return a2 - b2
        case '*':
            return a2* b2;
        case '/':
            return  a2 / b2 ;
        default:
            return 'Không hop le';
    }
}
console.log(tinh(5, 10, '+')); 
