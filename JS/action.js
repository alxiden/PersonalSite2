//Main buttons
document.getElementById('finger').addEventListener('click', finger)
document.getElementById('man').addEventListener('click', man)
document.getElementById('find').addEventListener('click', find)
document.getElementById('ls').addEventListener('click', ls)
document.getElementById('cd').addEventListener('click', cd)
document.getElementById('groups').addEventListener('click', groups)

//option bar buttons
document.getElementById('home').addEventListener('click', clearPage)
document.getElementById('about').addEventListener('click', finger)
document.getElementById('skill').addEventListener('click', man)
document.getElementById('projects').addEventListener('click', find)
document.getElementById('qua').addEventListener('click', ls)
document.getElementById('place').addEventListener('click', cd)
document.getElementById('links').addEventListener('click', groups)

//clear man screen
document.addEventListener('keydown',function(e){
    if (e.key === 'q' && currentpage === 'man'){
        clearPage()
    }
    
});

// current active page
let currentpage = 'home';

// page triggers
function finger(){
    if (currentpage == 'home'){
        fingerPage();
    } else {
        clearPage();
        setTimeout(function(){
            fingerPage();
        },999);
    }; 
}

function man(){
    if (currentpage == 'home'){
        manPage()
        // console.log(currentpage)        
    } else {
        clearPage()
        setTimeout(function(){
            manPage()
        },999)
    }; 
}

function find(){
    if (currentpage == 'home'){
        findPage()
        return currentpage = 'find';
    } else {
        clearPage()
        setTimeout(function(){
            findPage()
        },999)
    }; 
}

function ls(){
    if (currentpage == 'home'){
        fingerPage()
        return currentpage = 'ls';
    } else {
        clearPage()
        setTimeout(function(){
            fingerPage()
        },999)
    }; 
}

function cd(){}

function groups(){
    if (currentpage == 'home'){
        fingerPage()
        return currentpage = 'groups';
    } else {
        clearPage()
        setTimeout(function(){
            fingerPage()
        },999)
    }; 
}


// Typing Animation
function anima(input, location){

        const text  = document.querySelector(location);
        text.innerText = "";
        const str = input;
        const chars = str.split("");
        const interval = setInterval(()=>{
        if ( !chars.length ){ 
        return clearInterval(interval);
        }
        text.textContent += chars.shift();
  }, 100 );;
}

// Clear current page
function clearPage() {
    console.log(currentpage)
    var id = 'cmd-txt';
        const input = 'clear';
        var id = 'cmd-txt-2'
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        anima(input, '.cmd2');
        setTimeout(function(){
            document.getElementById('termial-line-2').style.zIndex = -2;
            var clearpage = currentpage + '-info';
            console.log(clearpage)
            document.getElementById(clearpage).style.zIndex = -2;
            document.getElementById(clearpage).style.position = 'absolute';
            document.getElementById('cmd-txt').innerHTML = '';
            document.getElementById('row1').style.visibility = 'inherit';
            document.getElementById('row2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'inherit';
            document.getElementById('cursor1').style.zIndex = 0;
            document.getElementById('cmd-txt-2').innerHTML = '';
            document.getElementById('man-info').visibility = 'hidden';
        },1000);
}

function clear() {
    document.getElementById('wel').style.visibility = 'hidden' ;
    document.getElementById('sel').style.visibility = 'hidden';
}

// page generation

function fingerPage() {
    var id = 'cmd-txt';
        clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = 'finger -l d.ward';
        anima(input, '.cmd');
        setTimeout(function(){
            document.getElementById('finger-info').style.position = 'inherit';
            document.getElementById('finger-info').style.zIndex = 3;
            document.getElementById('finger-info').style.visibility = 'inherit'
            document.getElementById('man-info').visibility = 'hidden';
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'absolute';
            document.getElementById('cursor1').style.zIndex = -2;
            return currentpage = 'finger'
        },2000);
        
}

function manPage() {
    var id = 'cmd-txt';
        clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = 'man d.ward/Skills';
        anima(input, '.cmd');
        setTimeout(function(){
            document.getElementById('row1').style.visibility = 'hidden';
            document.getElementById('row2').style.visibility = 'hidden';
            document.getElementById('man-info').style.position = 'inherit';
            document.getElementById('man-info').style.zIndex = 3;
            document.getElementById('man-info').style.visibility = 'inherit';
            return currentpage = 'man'
        },2000);
        
}

function findPage(){
    var id = 'cmd-txt';
    clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = "find Projects - name '*.txt' -print";
        anima(input, '.cmd');
        setTimeout(function(){
            document.getElementById('find-info').style.position = 'inherit';
            document.getElementById('find-info').style.zIndex = 3;
            document.getElementById('find-info').style.visibility = 'inherit'
            document.getElementById('man-info').visibility = 'hidden';
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'absolute';
            document.getElementById('cursor1').style.zIndex = -2;
            return currentpage = 'find'
        },2000);
}