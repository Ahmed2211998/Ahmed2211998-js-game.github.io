document.querySelector(".contril-buttones span") .onclick=function(){
         let youName =prompt('Whats Your Name?');
         if (youName==""||youName==null) 
         {
                  document.querySelector('.name span').innerHTML="known";
         }
         else{
                  document.querySelector('.name span').innerHTML=youName;

         }
         document.querySelector('.contril-buttones').remove();
setTimeout(function(params) {
        let contril_buttones=document.createElement("div")
        contril_buttones.classList.add("contril-buttones")
  document.querySelector("body").appendChild(contril_buttones)
  let sreatres=document.createElement("span")
  sreatres.classList.add("steart")
document.querySelector("span").appendChild(steart)

},50000)
         
       
};

let duration=1000;

let blockscontainer=document.querySelector('.momery-game-block');


let blocks=Array.from(blockscontainer.children);

let orderRange=[...Array(blocks.length).keys()];
// console.log(orderRange)
shuffle(orderRange)
// let testOrderRange=[5,6,4,14,16,.,...]

blocks.forEach((block,index)=>{
block.style.order=orderRange[index]
block.addEventListener('click',function () {
         flipBlock(block)    
});

});

function flipBlock(selecedtBlock) {
 selecedtBlock.classList.add("is-flipped");

let allFlippedblocks=blocks.filter(flippedblocks=>flippedblocks.classList.contains('is-flipped'))
 if (allFlippedblocks.length===2) {
         stopClincking();
         checkMachedBlock(allFlippedblocks[0],allFlippedblocks[1])
 }
}
function stopClincking() {
         blockscontainer.classList.add('no-clicking')
         setTimeout(()=>{
                  blockscontainer.classList.remove('no-clicking')

         },duration)
}

function checkMachedBlock(firstBlock,secondBlock) {
         let triesElment=document.querySelector('.tries span')
         if (firstBlock. dataset.technolgy===secondBlock. dataset.technolgy) {
                  firstBlock.classList.remove('is-flipped');
                  secondBlock.classList.remove('is-flipped');

                  firstBlock.classList.add('has-match');
                  secondBlock.classList.add('has-match');


document.getElementById('sucsses').play();

                  
         }
         else{
                  triesElment.innerHTML=parseInt(triesElment.innerHTML)  +  1;

                 setTimeout(()=>{
                  firstBlock.classList.remove('is-flipped');
                  secondBlock.classList.remove('is-flipped');
                 },duration)

                 document.getElementById('fial').play();

         }
}


function shuffle(array) {
        let current=array.length,
        temp,
        random; 
        while (current>0) {
           random=Math.floor(Math.random()*current) 
           
           current--;
           temp=array[current];
           array[current]=array[random];
           array[random]=temp;

        } 
        return array;
         
}
