document.getElementById('finger').addEventListener('click', finger)
document.getElementById('man').addEventListener('click', man)
document.getElementById('find').addEventListener('click', find)
document.getElementById('ls').addEventListener('click', ls)
document.getElementById('cd').addEventListener('click', cd)
document.getElementById('groups').addEventListener('click', groups)

function clear() {
    document.getElementById('wel').style.visibility = 'hidden' ;
    document.getElementById('sel').style.visibility = 'hidden';
}

function finger(){
    var id = 'cmd-txt'
    clear()
    document.getElementById(id).style.position = 'inherit'
    document.getElementById(id).style.zIndex = 0
    const input = 'finger -l d.ward'
    anima(input, '.cmd')
    document.getElementById('finger-info').style.position = 'inherit'
    document.getElementById('finger-info').style.zIndex = 3
}

function man(){
    var id = 'cmd-txt'
    clear()
    document.getElementById(id).style.position = 'inherit'
    document.getElementById(id).style.zIndex = 0
    const input = 'man d.ward/Skills'
    anima(input, '.cmd')
}

function find(){
    var id = 'cmd-txt'
    clear()
    document.getElementById(id).style.position = 'inherit'
    document.getElementById(id).style.zIndex = 0
    const input = 'find *project*'
    anima(input, '.cmd')
}

function ls(){
    var id = 'cmd-txt'
    clear()
    document.getElementById(id).style.position = 'inherit'
    document.getElementById(id).style.zIndex = 0
    const input = 'ls -lh Qualifications'
    anima(input, '.cmd')
}

function cd(){}

function groups(){
    var id = 'cmd-txt'
    clear()
    document.getElementById(id).style.position = 'inherit'
    document.getElementById(id).style.zIndex = 0
    const input = 'groups d.ward'
    anima(input, '.cmd')
}



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

