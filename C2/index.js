const studenti = [
  { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
  { ime: 'Vesna', prosek: 9.7, grad: 'Skopje' },
  { ime: 'Atanas', prosek: 10, grad: 'Skopje' },
  { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
  { ime: 'Muhamed', prosek: 10, grad: 'Kumanovo' },
  { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
  { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
  { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
  { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
  { ime: 'Simona', prosek: 5.2, grad: 'Bitola' },
  { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
  { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
  { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
  { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
  { ime: 'Naumcho', prosek: 6.66, grad: 'Ohrid'},
  { ime: 'Pauncho', prosek: 9.6, grad: 'Ohrid'}
];

//? 1. Site studenti od Skopje cie ime zavrshuva na A i imaat prosek nad 7 pordedeni po ime(rastechki)
//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki
//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
//? 4. Vkupen prosek na studenti koi se od Kumanovo
//? 5. Prosek na prosecite od gradovite Skopje i Ohrid
//? 6. Da se dodade usgte eden student so ime Goran prosek 8.3 i Strumica
//? 7. Da se izbrishe prviot student vo studenti
//? 8. Da se kreira nov array kade shto studentite od Ohrid, Skopje i Kumanovo ocenkite so prosek se za 1 pogolem (Dinamichki)


// Task 1

const cityGradeAndName = studenti
    .filter((item) => item.grad === 'Skopje' && item.prosek > 7 && item.ime.endsWith('a'))
    .sort((a, b) => a.ime - b.ime);

console.log(cityGradeAndName)

// Task 2

const gradeAndNotSkopje = studenti
    .filter((item) => item.grad !== 'Skopje' && item.prosek > 9)
    .sort((a, b) => b.prosek - a.prosek);

console.log(gradeAndNotSkopje)

// Task 3

const fiveLetterNameAndGrade = studenti
    .filter((item) => item.ime.length === 5)
    .sort((a, b) => b.prosek - a.prosek)
    .slice(0, 3);
 
console.log(fiveLetterNameAndGrade)

// Task 4

const averageGradeOfKumanovo = studenti
    .filter((item) => item.grad === 'Kumanovo')
    .reduce((acc, s) => {
        return acc + s.prosek
    }, 0)

console.log(`The average grade of Kumanovo is ${averageGradeOfKumanovo}!`)

// Task 5

const averageOfSkopjeAndOhrid = studenti
    .filter ((item) => item.grad === 'Skopje' || item.grad === 'Ohrid')
    .reduce ((acc, s) => {
        return acc + s.prosek
    }, 0) / studenti.filter((item) => item.grad === 'Skopje' || item.grad === 'Ohrid').length

    console.log(`The average grade of Skopje and Ohrid is ${averageOfSkopjeAndOhrid}!`)

// const averageOfSkopjeAndOhrid = averageOfSkopje + averageOfOhrid <== Alternative is to find the averages of Skopje and Ohrid and then average them out


// Task 6

studenti.push({ ime: 'Goran', prosek: 8.3, grad: 'Strumica' })

console.log(studenti)

// Task 7

studenti.shift()
console.log(studenti)

// Task 8

const skopjeOhridKumanovoGradeBoost = studenti
    .filter ((item) => item.grad === 'Skopje' || item.grad === 'Ohrid' || item.grad === 'Kumanovo')
    .map((item) => {
        if (item.prosek > 9)  {
            return {... item, prosek: 10}
        } else {
            return {...item, prosek: item.prosek +1}
        }
    })
        
console.log(skopjeOhridKumanovoGradeBoost)