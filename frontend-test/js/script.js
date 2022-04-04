// Import stylesheets
//import './style.css';

let docs = [];

// There is the function to get data.
async function getData() {
  return await fetch("https://api.plos.org/search?q=title:DNA")
    .then((response) => response.json())
    .then((json) => {
      docs = json.response.docs;
    });
}
async function get() {
  await getData();
  console.log(docs);
}
get();
{
}


async function firstExercise(type){
  await getData();
  console.log("\n--> Ejercicio 1: <--")

  let filteredDocs = [];

  filteredDocs = docs.filter(doc => doc.article_type != type)
  console.log(filteredDocs);
}

firstExercise("Research Article");
{
}

async function secondExercise(number){
  await getData();
  console.log("\n--> Ejercicio 2: <--")

  let greaterScores = [];

  greaterScores = docs.filter(score => score.score > number)
  greaterScores.forEach(author => console.log(author.author_display));
}

secondExercise(6.0);
{
}

async function thirdExercise(){
  await getData();
  console.log("\n--> Ejercicio 3: <--")

  const doc = docs.find(doc => doc.id == "10.1371/journal.pgen.1006605");

  doc.article_type = "Newspaper";
  console.log(doc);

}

thirdExercise();
{
}

async function fourthExercise(){
  await getData();
  console.log("\n--> Ejercicio 4: <--")

  const articleType = Array.from(docs, doc => doc.article_type)
  const types = [...new Set(articleType)];

  console.log(types.join(", "));
}

fourthExercise();
{
}

async function fifthExercise(){
  await getData();
  console.log("\n--> Ejercicio 5: <--")

  const journalsArray = Array.from(docs, doc => doc.journal)
  const journals = [...new Set(journalsArray)];

  console.log(journals.join(", "));
}

fifthExercise();
{
}

async function sixthExercise(){
  await getData();
  console.log("\n--> Ejercicio 6: <--")

  //Falta extra point
  for(doc of docs)
    delete doc.eissn;
  
  console.log(docs)
}

sixthExercise();
{
}

async function seventhExercise(){
  await getData();
  console.log("\n--> Ejercicio 7: <--")

  let x;
  let y;

  for(let index of docs){
    if(index.id === "10.1371/journal.pone.0047101")
      x = docs.indexOf(index);
    else if(index.id === "10.1371/journal.pgen.1000047")
      y = (docs.indexOf(index)) + 1;
  }
    
  
  console.log(docs.slice(x, y));
}

seventhExercise();
{
}

let newItems = [
  {
    "id":"10.1371/journal.pone.0177149",
    "journal":"Wall Street",
    "eissn":"1932-6203",
    "publication_date":"2017-05-03T00:00:00Z",
    "article_type":"Newspaper",
    "author_display":["Irina Bruck",
      "Nalini Dhingra",
      "Matthew P. Martinez",
      "Daniel L. Kaplan"],
      "abstract":["\nDpb11 is required for the initiation of DNA replication in budding yeast. We found that Dpb11 binds tightly to single-stranded DNA (ssDNA) or branched DNA structures, while its human homolog, TopBP1, bindstightly to branched-DNA structures. We also found that Dpb11 binds stably to CDK-phosphorylated RPA, the eukaryotic ssDNA binding protein, in the presence of branched DNA. A Dpb11 mutant specifically defective for DNA binding did not exhibit tight binding to RPA in the presence of DNA, suggesting that Dpb11-interaction with DNA may promote the recruitment of RPA to melted DNA. We then characterized a mutant of Dpb11 that is specifically defective in DNA binding in budding yeast cells. Expression of dpb11-m1,2,3,5,ΔC results in a substantial decrease in RPA recruitment to origins, suggesting that Dpb11 interaction with DNA may be required for RPA recruitment to origins. Expression of dpb11-m1,2,3,5,ΔC also results in diminished GINS interaction with Mcm2-7 during S phase, while Cdc45 interaction with Mcm2-7 is like wild-type. The reduced GINS interaction with Mcm2-7 may be an indirect consequence of diminished origin melting. We propose that the tight interaction between Dpb11, CDK-phosphorylated RPA, and branched-DNA may be required for the essential function of stabilizing melted origin DNA in vivo. We also propose an alternative model, whereinDpb11-DNA interaction is required for some other function in DNA replication initiation, such as helicase activation.\n"],
      "title_display":"Dpb11 may function with RPA and DNA to initiate DNA replication",
      "score":7.018296},
    {
      "id":"10.1371/journal.pgen.1006699",
      "journal":"Wall Street",
      "eissn":"1553-7404",
      "publication_date":"2017-02-10T00:00:00Z",
      "article_type":"Newspaper",
      "author_display":["Concetta Cuozzo",
        "Antonio Porcellini",
        "Tiziana Angrisano",
        "Annalisa Morano",
        "Bongyong Lee",
        "Alba Di Pardo",
        "Samantha Messina",
        "Rodolfo Iuliano",
        "Alfredo Fusco",
        "Maria R. Santillo",
        "Mark T. Muller",
        "Lorenzo Chiariotti",
        "Max E. Gottesman",
        "Enrico V. Avvedimento"],
      "abstract":[""],
      "title_display":"Correction: DNA Damage, Homology-Directed Repair, and DNA Methylation",
      "score":7.018296
    }   
]

async function eighthExercise(){
  await getData();
  console.log("\n--> Ejercicio 8: <--")

  let updatedDocs = docs.concat(newItems)
  console.log(updatedDocs)
}

eighthExercise();
{
}

async function ninethExercise() {
  await getData();
  console.log("\n--> Ejercicio 9: <--")

  let oddObjects = [];

  for (let object of docs)
    if (docs.indexOf(object) % 2 != 0) oddObjects.push(object);

  newFormat(oddObjects);
  console.log(oddObjects);

  sortArray(oddObjects, oddObjects.article_type)
}

ninethExercise();
{
}

function newFormat(oddObjects) {
  for (let oddObject of oddObjects) {
    oddObject.title = `${oddObject.journal} ${oddObject.title_display}`;
    oddObject.authors = oddObject.author_display.join(" - ");

    delete oddObject.abstract;
    delete oddObject.author_display;
    delete oddObject.eissn;
    delete oddObject.journal;
    delete oddObject.publication_date;
    delete oddObject.title_display;
  }
}

function sortArray(arr, propertie) {

  let sortedArray = arr.sort(propertie)

  console.log(sortedArray)
}