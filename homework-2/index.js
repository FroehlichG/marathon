const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
const letterToFind = 'а';

const phoneNumber = '+71234567890';

function getRow(firstRow, secondRow) {
    return firstRow.split(letterToFind).length-1>secondRow.split(letterToFind).length-1 ? firstRow : secondRow;
}

function formattedPhone(phoneNumber) {
    const cleanString = ('' + phoneNumber).replace(/\D/g, '')
    const template = cleanString.match(/^(7|)?(\d{3})(\d{3})(\d{2})(\d{2})$/)
    if (template) {
        const newNumber = (template[1] ? '+7 ' : '')
        return [newNumber, '(', template[2], ') ', template[3], '-', template[4], '-', template[5]].join('')
    }
    return null
}

console.log(getRow(firstRow, secondRow));
console.log(formattedPhone(phoneNumber));
