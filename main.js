// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

let validCards = [];
let invalidCards = [];
let companies = [];

// Add your functions below:

function validateCred(arr) {
    let newArr= [];
    let subVar = 0;
    for (i = arr.length - 1; i >= 0; i -= 2) {
        // console.log(`position ${i} in array is ${arr[i]}, which is added to newArr`);
        newArr.unshift(arr[i]);
        if (i == 0) {
            break;
        } else {
            if(arr[i-1] * 2 > 9) {
                // console.log(`position ${i-1} is ${arr[i-1]}, which being doubled, is higher than 9. Thus 9 is removed and ${arr[i-1] * 2 - 9} is added to newArr.`);
                newArr.unshift(arr[i-1] * 2 - 9);
            } else {
                // console.log(`position ${i-1} is ${arr[i-1]}, which is doubled and added to newArr as ${arr[i-1] * 2}.`);
                newArr.unshift(arr[i-1] * 2);
            }
        }
        // console.log(`new array is now ${newArr} with length of ${newArr.length}`);
    }
    // console.log(`the input array is ${arr}, with lenght of ${arr.length}`);
    // console.log('Adding all items in newArr together...');
    for (i = 0; i < newArr.length; i++) {
        subVar = subVar + newArr[i];
    }
    // console.log(`sum of newArr is ${subVar}`);
    // console.log('Dividing sum by 10 to check modulo...');
    
    if(subVar % 10 == 0) {
        console.log(`VALID CREDIT. Modulo 10 of sum is 0.`);
        return true;
    } else {
        console.log(`INVALID: the modulo 10 of sum is ${subVar % 10}`)
        return false;
    }
}



function findInvalidCards(arra) {

    console.log(`batch length is ${arra.length}`);
    for (j = 0; j < arra.length; j++) {
        console.log(arra[j]);
        let stat = validateCred(arra[j]);
        if (stat == true) {
            validCards.push(arra[j]);
        } else {
            invalidCards.push(arra[j]);
        }
    }

}


function idInvalidCardCompanies(abi) {
    for (q = 0; q < abi.length; q++) {
        console.log(`looking into array`);
        console.log(abi[q]);
        if (abi[q][0] == 3) {
            console.log('array belongs to Amex');
            if(companies.includes('Amex')) {
                console.log('Amex is already in the company follow up list');
                continue;
            } else {
                companies.push('Amex');
                console.log('adding Amex to the company follow up list');
                continue;
            }
        } else if (abi[q][0] == 4) {
            console.log('array belongs to Visa');
            if(companies.includes('Visa')) {
                console.log('Visa is already in the company follow up list');
                continue;
            } else {
                companies.push('Visa');
                console.log('adding Visa to the company follow up list');
                continue;
            }
        } else if (abi[q][0] == 5) {
            console.log('array belongs to Mastercard');
            if(companies.includes('Mastercard')) {
                console.log('Mastercard is already in the company follow up list');
                continue;
            } else {
                companies.push('Mastercard');
                console.log('adding Mastercard to the company follow up list');
                continue;
            }
        } else if (abi[q][0] == 6) {
            console.log('array belongs to Discover');
            if(companies.includes('Discover')) {
                console.log('Discover is already in the company follow up list');
                continue;
            } else {
                companies.push('Discover');
                console.log('adding discover to the company follow up list');
                continue;
            }
        } else {
            console.log('Company not found');
        }
    }
}


findInvalidCards(batch);
console.log('valid cards');
console.log(validCards);
console.log('invalid cards');
console.log(invalidCards);

idInvalidCardCompanies(invalidCards);
console.log('list of companies to follow up on invalid cards:');
console.log(companies);