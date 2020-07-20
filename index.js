//This is the Harmless Ransom Note algorithm
/*
  The HarmlessRansomNote algo gets two functions.
   One is the Magazine Text and one is the Note Text.
   The objective is to find out that if all the words
   present in the Note text is present in the magazine text too
   The number of times the word occurs in the Note text should also be 
   equal or greater than the number of times the note occurs in the Magazine Text too.
*/

function harmlessRansomNote(noteText, magazineText){
  //First convert both the noteText and magazineText into arrays so that it becomes easy to loop through them
  var noteArr = noteText.split(' ') //split it at the spaces
  var magazineArr = magazineText.split(' ')
  var magazineObj = {}

  magazineArr.forEach( word => {
    if( !magazineObj[word]) magazineObj[word] = 0 
    //if particular key value pair is not there then create it here...
    magazineObj[word]++
  })
  
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if(magazineObj[word]){ //if the particular word in note is also present in magazine
      magazineObj[word]--;
      if(magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false
  })
  return noteIsPossible
}

if (harmlessRansomNote('This is magazine', 'This is the magazine text from the magazine')) 
{
  console.log('TRUE Harmless Ransom Note')
} 
else console.log('FALSE Harmless Ransom Note')

