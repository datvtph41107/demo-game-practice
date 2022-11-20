const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png'
const spriteWidth = 575;
const spriteHeight = 523;

let playerState = 'jump';
const dropDown = document.getElementById('animations');
dropDown.addEventListener('change', function (e) {
    playerState = e.target.value ; 
});

let gameFrame = 0;
const staggerFrames = 8;
const spriteAnimations = [];
const animationStates = [
  {
    name: 'idle',
    frame: 7,
  },
    {
    name: 'jump',
    frame: 7,
  },  
    {
    name: 'fall',
    frame: 7,
  },  
    {
    name: 'run',
    frame: 9,
  },  
    {
    name: 'dizzy',
    frame: 11,
  },  
    {
    name: 'sit',
    frame: 5,
  },  
    {
    name: 'roll',
    frame: 7,
  },  
    {
    name: 'bite',
    frame: 7,
  },  
    {
    name: 'ko',
    frame: 12,
  },  
    {
    name: 'gethit',
    frame: 4,
  },    
];
animationStates.forEach((state,index) => {
    let frames = {
        loc:[],
    }
    for (let j=0 ;j < state.frame; j++) {
        let positionX = j * spriteWidth;
        // nhân số để 
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    } 
    spriteAnimations[state.name] = frames
});

// animate defaute là khung màu đen

function animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;  
      // loc[position] là loc[0,1,2,3,4,5,6,7,8,9] when we calculator rồi trích xuất vào mảng của loc.y
    let frameY = spriteAnimations[playerState].loc[position].y 

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    
    gameFrame++;
    requestAnimationFrame(animate)
};
animate()

  // ctx.fillRect(100,100,100,100);
  // fillReact: element 1 tương đương padding-left, element2 tương đương padding-top,element3 là width,
    // element 4 là height