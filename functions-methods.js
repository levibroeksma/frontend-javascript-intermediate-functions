// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.

/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

const eMail = "n.eeken@novi-education.nl";

function getEmailDomain(mailCheck) {
    locateAd = mailCheck.indexOf("@");
    return mailCheck.substring(locateAd + 1);
}

console.log(getEmailDomain(eMail));

console.log("\n");

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

const mailAddress = "novi.nlaapjesk@outlook.com";

function typeOfEmail(typeMail) {
    if (typeMail.includes("@novi.nl")) {
        return "Medewerker";
    } else if(typeMail.includes("@novi-education.nl")) {
        return "Student";
    }
        return "Extern";
}

console.log(typeOfEmail(mailAddress));

console.log("\n");

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const mailToCheck = "levi@broeksma.nl";

function checkEmailValidity(mailValidCheck) {
    const containAd = mailValidCheck.includes("@");
    const noComma = mailValidCheck.includes(",");
    const indexPoint = mailValidCheck.lastIndexOf(".");
    const lastIndexMail = mailValidCheck.length - 1;
    const pointNotLast = indexPoint < lastIndexMail;

    // Correte code hieronder:

    if (containAd === true && noComma === false && pointNotLast === true) {
        return "E-mail is correct"
    } else {
        return "E-mail is incorrect, probeer opnieuw"
    }
}

console.log(checkEmailValidity(mailToCheck));

console.log('\n');

console.log('Versie 2: ingekort');

console.log('\n');

const mailToCheck1 = "levi@broeksma.nl";

function checkEmailValidity1(mailValidCheck) {
    const containAd = mailValidCheck.includes("@");
    const noComma = mailValidCheck.includes(",");
    const indexPoint = mailValidCheck.lastIndexOf(".") < mailValidCheck.length - 1;

    if (containAd === true && noComma === false && indexPoint === true) {
        return "E-mail is correct";
    } else {
        return "E-mail is incorrect, probeer opnieuw";
    }
}

console.log(checkEmailValidity1(mailToCheck1));

console.log('\n');

console.log('Versie 3: verder ingekort');

console.log('\n');

const mailToCheck2 = 'levi@broeksma.nl';

function checkEmailValidity2(mailValidCheck) {
    if(mailValidCheck.includes('@') === true && mailValidCheck.includes(',') === false && mailValidCheck.lastIndexOf('.') < mailValidCheck.length - 1 === true) {
        return 'E-mail is correct.';
    }
    return 'E-mail is incorrect, probeer opnieuw.'
}

console.log(checkEmailValidity2(mailToCheck2));