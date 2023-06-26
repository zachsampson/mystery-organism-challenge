// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


// Factory function to build new specimens
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    //Mutate one base from the array into another base
    mutate() {
      //Randomly select base from dna set
      let base = dna[Math.floor(Math.random() * 15)];
      let baseIndex = dna.indexOf(base);
      let baseMutation = returnRandBase();
      //Swap out current base with different base
      if (base === baseMutation) {
        baseMutation = returnRandBase();
      } else {
         baseMutation;
      };
      dna[baseIndex] = baseMutation;
    },
    compareDNA(pAequor) {
      //Create another pAequor dna set
      const pAequor2 = (pAequorFactory(2,mockUpStrand()));
       //Create variables to find percentage in common
        let sameBase = 0;
        let diffBase = 0;
        //Loop through 2 dna sequences to find what bases match
      for (let i = 0; i < pAequor.dna.length; i++) {
        let base1 = pAequor.dna[i];
        let base2 = pAequor2.dna[i];
        //Keep tally of matching bases
        if (base1 === base2) {
          sameBase++;
        } else {
          diffBase++;
        }
      }
      //Find percentage of common dna in sets have
      const percentCommon = (sameBase/diffBase) * 100;
      console.log("Specimen #1 and Specimen #2 have " + percentCommon.toFixed(2) + "% DNA in common.");
    },
    willLikelySurvive() {
      let cOrG = 0;
      //Check if dna contains C or G and keep a tally
      for(let i = 0; i < dna.length; i++) {
       if (dna[i] === 'C' || dna[i] === 'G') {
         cOrG++;
       }     
      }
      //If dna has at least 60% C or G return true
      if (cOrG > 8) {
         return true;
       } else {
         return false;
       }
    },
    // This function returns a complementary dna strand to the one passed into it
    complementStrand() {
      let complementDNA = [];
      for (let i = 0; i < dna.length; i++) {
        let comp = dna[i];
        if (comp === 'C') {
          complementDNA[i] = 'G';
        } else if (comp === 'G'){
          complementDNA[i] = 'C';
        } else if (comp === 'A') {
          complementDNA[i] = 'T';
        } else if (comp === 'T') {
          complementDNA[i] = 'A';
        }
    }
    console.log(dna);
    console.log(complementDNA);
  }
  }
};

//This creates 30 instances of pAequor that are most likely to survive.
let pAequorSurvivable = [];
let i = 0;
//Only add the likely to survive pAequor instances
do {
  let pAequorSurvive = (pAequorFactory(i, mockUpStrand()));
  if (pAequorSurvive.willLikelySurvive() === true) {
    pAequorSurvivable.push(pAequorSurvive);
    i++;
  } 
} while (i < 30);

//Code below tests that everything is working correctly
console.log(pAequorSurvivable[0].compareDNA(pAequorSurvivable[1]));
const pAequor1 = (pAequorFactory(1, mockUpStrand()));
//console.log(pAequor1.complementStrand());
//console.log(pAequor1);
//pAequor1.willLikelySurvive();





