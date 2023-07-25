//úkol 1: kontrola datumu DD.MM.YYYY
/*
const jeValidniDatum = (datum) => {
    
    const rok = Number(datum.slice(6));
    if (rok >= 1999 && rok <= 2100) {
        return true
    } else {
    return console.log('špatný rok');
    }

   
    const mesic = Number(datum.slice(3,5));
    if ((mesic >= 1) && (mesic <= 12)) {
        return true
    }  else {
        return console.log('špatný měsíc');
    }

    const den = Number(datum.slice(0,2));
    if ((mesic === 1) && (den >= 1 && den <= 31)) {
        return true
    } else if ((mesic === 2) && (den >= 1 && den <= 28)) {
        return true
    } else if ((mesic === 2) && (den >= 1 && den <= 29)) {
        if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
            return true
        }
    } else if ((mesic === 3) && (den >= 1 && den <= 31)) {
        return true
    } else if ((mesic === 4) && (den >= 1 && den <= 30)) {
        return true
    } else if ((mesic === 5) && (den >=1 && den <= 31)) {
        return true
    } else if ((mesic === 6) && (den >=1 && den <= 30)) {
        return true
    } else if ((mesic === 7) && (den >= 1 && den <= 31)) { 
        return true
    } else if ((mesic === 8) && (den >= 1 && den <= 31)) {
        return true
    } else if ((mesic === 9) && (den >= 1 && den <= 30)) {
        return true
    } else if ((mesic === 10) && (den >= 1 && den <= 31)) {
        return true
    } else if ((mesic === 11) && (den >= 1 && den <= 30)) {
        return true
    } else if ((mesic === 12) && (den >= 1 && den <= 31)) {
        return true
    } else {
        return console.log('špatný den');
    }

}
console.log(jeValidniDatum('29.13.2024'));

*/

//je prestupny rok
/*
function jePrestupnyRok(rok) {
	if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
		return true
	}
	return false;
}
*/


//kontrola datumu
const jeValidniDatum = (datum) => {
    
    const rok = Number(datum.slice(6));
    if (rok >= 1999 && rok <= 2100) {
        console.log('správný rok');
    } else {
        console.log('špatný rok');
    }

   
    const mesic = Number(datum.slice(3,5));
    if ((mesic >= 1) && (mesic <= 12)) {
        console.log('správný měsíc');
    }  else {
        console.log('špatný měsíc');
    }


    const den = Number(datum.slice(0,2));
    if ((mesic === 1) && (den >= 1 && den <= 31)) {
        console.log('správný den');
    } else if ((mesic === 2) && (den >= 1 && den <= 28)) {
        console.log('správný den');
    } else if ((mesic === 2) && (den >= 1 && den <= 29)) {
        if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
            console.log('správný den');
        }
    } else if ((mesic === 3) && (den >= 1 && den <= 31)) {
        console.log('správný den');
    } else if ((mesic === 4) && (den >= 1 && den <= 30)) {
        console.log('správný den');
    } else if ((mesic === 5) && (den >=1 && den <= 31)) {
        console.log('správný den');
    } else if ((mesic === 6) && (den >=1 && den <= 30)) {
        console.log('správný den');
    } else if ((mesic === 7) && (den >= 1 && den <= 31)) { 
        console.log('správný den');
    } else if ((mesic === 8) && (den >= 1 && den <= 31)) {
        console.log('správný den');
    } else if ((mesic === 9) && (den >= 1 && den <= 30)) {
        console.log('správný den');
    } else if ((mesic === 10) && (den >= 1 && den <= 31)) {
        console.log('správný den');
    } else if ((mesic === 11) && (den >= 1 && den <= 30)) {
        console.log('správný den');
    } else if ((mesic === 12) && (den >= 1 && den <= 31)) {
        console.log('správný den');
    } else {
        console.log('špatný den');
    }


}

console.log(jeValidniDatum('29.02.2024'));


//bonus 1

const pocetDniMesice = (mesic, rok) => {
    if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
		if (mesic === 2) {
            console.log('29');
        }
	} else if (mesic === 1) {
        console.log('31');
    } else if (mesic === 2) {
        console.log('28');
    } else if (mesic === 3) {
        console.log('31');
    } else if (mesic === 4) {
        console.log('30');
    } else if (mesic === 5) {
        console.log('31');
    } else if (mesic === 6) {
        console.log('30');
    } else if (mesic === 7) {
        console.log('31');
    } else if (mesic === 8) {
        console.log('31');
    } else if (mesic === 9) {
        console.log('30');
    } else if (mesic === 10) {
        console.log('31');
    } else if (mesic === 11) {
        console.log('30');
    } else if (mesic === 12) {
        console.log('31');
    }
}


console.log(pocetDniMesice(2, 2024));



//bonus 2
let jeDatum;
let chyba;


const validniDatum = (datum) => {
    

    const rok = Number(datum.slice(6));
    if (rok >= 1999 && rok <= 2100) {
        jeDatum = true;
        chyba = '';
        
    } else {
        jeDatum = false;
        chyba = 'špatně zadaný rok';
    }

   
    const mesic = Number(datum.slice(3,5));
    if ((mesic >= 1) && (mesic <= 12)) {
        jeDatum = true;
        chyba = '';
    }  else {
        jeDatum = false;
        chyba = 'špatně zadaný měsíc';
    }


    const den = Number(datum.slice(0,2));
    if ((mesic === 1) && (den >= 1 && den <= 31)) {
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 2) && (den >= 1 && den <= 28)) {
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 2) && (den >= 1 && den <= 29)) {
        if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
            jeDatum = true;
            chyba = '';
        }
    } else if ((mesic === 3) && (den >= 1 && den <= 31)) {
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 4) && (den >= 1 && den <= 30)) {
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 5) && (den >=1 && den <= 31)) {
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 6) && (den >=1 && den <= 30)) {
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 7) && (den >= 1 && den <= 31)) { 
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 8) && (den >= 1 && den <= 31)) {
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 9) && (den >= 1 && den <= 30)) {
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 10) && (den >= 1 && den <= 31)) {
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 11) && (den >= 1 && den <= 30)) {
        jeDatum = true;
        chyba = '';
    } else if ((mesic === 12) && (den >= 1 && den <= 31)) {
        jeDatum = true;
        chyba = '';
    } else {
        jeDatum = false;
        chyba = 'špatně zadaný den';
    }


}

validniDatum('29.99.2024');
console.log(jeDatum, chyba);