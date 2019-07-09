import React from 'react';
import uuid from "uuid";


function getNewWords(sentNum, wordList){
	let filteredArray= [] ;

	wordList.forEach(function(word) {
		if(word.sent_num ==sentNum)
    		filteredArray.push(word.word_form)
	});

	return filteredArray
}


function getMatchIndex(textContent, sentNum, wordList){
  const newWords = getNewWords(sentNum, wordList);
  //console.log('New word 0: ', newWords[0]);
  //const regex = new RegExp(`\\b${highlight}\\b`, 'gi');
  let results =[];
  let result = null;
  let regex = null;
  
  newWords.forEach(function(newWord){
    regex = new RegExp(`\\b${newWord}\\b`, 'gi');
 
    while((result = regex.exec(textContent)) !== null) {
          results.push({match: newWord, position: result.index});
    }

  })

  //sort array by asceding position
  results.sort((a, b) => (a.position > b.position) ? 1 : -1);
  return results;

}


function getElements(textContent, sentNum, wordList){
  const mappings = getMatchIndex(textContent, sentNum, wordList);
 
  //console.log('mappings:', mappings)
  let outElements = [];
  let startPosition = 0;

  mappings.forEach(function(map, index){
    let prefix = '';
    let body = '';
    let suffix = '';

    //console.log('map:', map, 'index:', index);
    if (index < (mappings.length - 1)) {
      //first match in sentence
      if (map.position > startPosition){
            if (startPosition == 0){
              prefix = textContent.slice(0, map.position);
            }
            else{
              prefix = textContent.slice(startPosition, map.position);
            }
            body = textContent.slice(map.position, map.position + map.match.length );
            startPosition = map.position + map.match.length ;
            //console.log('prefix:', prefix, 'word:', map.match, 'startPosition:', startPosition)
            suffix = '';
            outElements.push({prefix, body, suffix})
      }

    } else  {
      //last match in sentence
        prefix = textContent.slice(startPosition, map.position);
        body = textContent.slice(map.position, map.position + map.match.length );
        startPosition = map.position + map.match.length ;
        //slice to the end
        suffix = textContent.slice(startPosition);
        outElements.push({prefix, body, suffix})


 

    } 

  })

  //console.log ('elements', outElements);
  //console.log('textContent', textContent);
  return (outElements);

}



const ClickableSpan = ({content='', handleClick = null}) => {

    return (
       <span 
        key = {uuid.v4()}
        className= "clickableSpan"
        onClick = {()=> handleClick({content})}
        >
        {content}
       </span>
    )
}





const ClickableContent = ({textContent = '', sentID = 0, sentNum = 0,   wordList = '', handleClick = null}) => {
   
   const elements = getElements(textContent, sentNum, wordList);
   //console.log('passed sentNum:', sentNum);
   return (

    <div key={sentID +  'container'}>
      {elements.map((element, index) => (
        <React.Fragment key={sentID + 'fragment' + index + 'num'}>
          <span key={uuid.v4()}>{element.prefix} </span>
          <ClickableSpan 
            content = {element.body}
            handleClick = {handleClick} 
          />
          <span key={uuid.v4()}>{element.suffix}</span>

        </React.Fragment>
      ))}

    </div>

   )
}

export default ClickableContent;