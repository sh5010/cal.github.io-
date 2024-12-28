function calculate() {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(value1) || isNaN(value2)) {
        alert('يرجى إدخال قيم صحيحة في كلا الحقلين');
        return;
    }

    switch (operation) {
        case 'add':
            result = value1 + value2;
            break;
        case 'subtract':
            result = value1 - value2;
            break;
        case 'multiply':
            result = value1 * value2;
            break;
        case 'divide':
            if (value2 === 0) {
                alert('لا يمكن القسمة على صفر');
                return;
            }
            result = value1 / value2;
            break;
        default:
            alert('يرجى اختيار عملية صحيحة');
            return;
    }

    document.getElementById('result').textContent = result;
}



