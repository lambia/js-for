//Ciclo da 0 (incluso) a 10 (escluso)
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// //Ciclo da 30 a 40 (inclusi)
// for (let i = 30; i <= 40; i++) {
//     console.log(i);
// }

// //Ciclo da 3 a 30 (inclusi)
// for (let i = 3; i <= 30; i+=3) {
//     console.log(i);
// }

// //Ciclo da 0 a 30 (inclusi)
// for (let i = 0; i <= 30; i+=3) {
//     console.log(i);
// }

//Ciclo da 30 a 0
// for (let i = 30; i >= 0; i--) {
//     console.log(i);
// }

//Ciclo da 0 (incluso) a -10 (escluso)
// for (let i = 0; i > -10; i--) {
//     console.log(i);
// }

//Ciclo con incremento potenze di 2
// for (let i = 1; i < 1024; i=i*2) {
//     console.log(i);
// }

//Ciclo con logaritmo
// for (let i = 1024; i > 0; i=Math.log(i)) {
//     console.log(i);
// }

// for(let i = 0; i<=30; i++) {

//     if(i==10 || i==20 || i==30) {
//         console.log("NUMERONE: ", i);
//     } else {
//         console.log("Numeretto: ", i);
//     }

// }

// for(let i = 0; i<=30; i++) {

//     console.log(i);

//     if(i==10 || i==20 || i==30) {
//         console.log("NUMERO TONDO");
//     }

// }

// const container = document.getElementById("container");

// for(let i = 0; i<10; i++) {

//     if(i==3) {
//         container.innerHTML = container.innerHTML + `<p class="red">Valore: ${i}</p>`;
//     } else {
//         container.innerHTML = container.innerHTML + `<p>Valore: ${i}</p>`;
//     }

// }

const container = document.getElementById("container");

for (let i = 0; i < 6; i++) {

    const nuovoParagraph = document.createElement("p");
    nuovoParagraph.innerHTML = `Valore: ${i}`;

    if(i==3) { nuovoParagraph.classList.add("red"); }

    container.append(nuovoParagraph);

}

console.log("Conteggio completato");