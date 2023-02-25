Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

let canvas = document.getElementById('canvas');

smallestSize = Math.min(window.innerHeight, window.innerWidth);

canvas.setAttribute('height', smallestSize - 300);
canvas.setAttribute('width', smallestSize - 300);

let ctx = canvas.getContext('2d');

ctx.fillStyle = '#6eb064';
    
ctx.fillRect(0, 0, canvas.width, canvas.height);

eyes = ['closed', 'open']
mouths = ['happy', 'open', 'straight']
hats = ['none', 'beret', 'birthday', 'bowler', 'bucket', 'bucket2', 'chef', 'christmas', 'cowboy', 'crown', 'fancy', 'fedora', 'pillow', 'roman', 'sailor', 'snow', 'sun', 'wizard']
faces = ['none' ,'blush', 'monocle', 'moustache', 'moustache2', 'stars', 'zzz']

const imgBase = new Image;
imgBase.src = './frog-parts/base.png';
imgBase.onload = function() {
    ctx.drawImage(imgBase, 0, 0, imgBase.width, imgBase.height, 0, 0, canvas.width, canvas.height);
   
    const imgHat = new Image;
    imgHat.src = './frog-parts/hats/' + hats.sample() + '.png';
    imgHat.onload = function() {
        ctx.drawImage(imgHat, 0, 0, imgHat.width, imgHat.height, 0, 0, canvas.width, canvas.height);   
        
        const imgMouth = new Image;
        imgMouth.src = './frog-parts/mouths/' + mouths.sample() + '.png';
        imgMouth.onload = function() {
            ctx.drawImage(imgMouth, 0, 0, imgMouth.width, imgMouth.height, 0, 0, canvas.width, canvas.height);      

            const imgFace = new Image;
            imgFace.src = './frog-parts/faces/' + faces.sample() + '.png';
            imgFace.onload = function() {
                ctx.drawImage(imgFace, 0, 0, imgFace.width, imgFace.height, 0, 0, canvas.width, canvas.height);      

                const imgEyes = new Image;
                imgEyes.src = './frog-parts/eyes/' + eyes.sample() + '.png';
                imgEyes.onload = function() {
                    ctx.drawImage(imgEyes, 0, 0, imgEyes.width, imgEyes.height, 0, 0, canvas.width, canvas.height);      
                }
            }
        }
    }
}
