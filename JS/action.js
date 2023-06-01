//Main buttons
document.getElementById('finger').addEventListener('click', finger)
document.getElementById('man').addEventListener('click', man)
document.getElementById('find').addEventListener('click', find)
document.getElementById('ls').addEventListener('click', ls)
document.getElementById('cd').addEventListener('click', cd)
document.getElementById('cat').addEventListener('click', cat)

//q button
document.getElementById('q').addEventListener('click',clearPage)

//option bar file buttons
document.getElementById('home').addEventListener('click', clearPage)
document.getElementById('about').addEventListener('click', finger)
document.getElementById('skill').addEventListener('click', man)
document.getElementById('projects').addEventListener('click', find)
document.getElementById('qua').addEventListener('click', ls)
document.getElementById('place').addEventListener('click', cd)
document.getElementById('links').addEventListener('click', cat)

//option bar Terminal buttons
document.getElementById('reboot').addEventListener('click', Reload)
document.getElementById('clear').addEventListener('click', clearPage)

//Modal monitering
document.getElementById('Intune').addEventListener('click',function(e){ModelText('Intune')})
document.getElementById('TeamsBot').addEventListener('click',function(e){ModelText('TeamsBot')})
document.getElementById('NewStarter').addEventListener('click',function(e){ModelText('NewStarter')})
document.getElementById('Sharepoint').addEventListener('click',function(e){ModelText('Sharepoint')})
document.getElementById('Helpdesk').addEventListener('click',function(e){ModelText('Helpdesk')})
document.getElementById('Switch').addEventListener('click',function(e){ModelText('Switch')})

//clear man screen
document.addEventListener('keydown',function(e){
    if (e.key === 'q' && currentpage === 'man'){
        clearPage()
    }
    
});

//reload the website
function Reload(){
    if(currentpage === 'home') {
        anima('reboot', '.cmd');
        setTimeout(function(){location.reload()},1000)
    }else {
        var id = 'cmd-txt-2'
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        anima('reboot', '.cmd2');
        setTimeout(function(){location.reload()},1000)
    }
    
}

//Model Text Change
function ModelText(project){
    var title = 'findModalLabel'
    var body = 'findBody'
    let modelTxt = project
    // console.log(project)
    if(modelTxt === 'Intune'){
        document.getElementById(title).innerHTML = 'Intune Rollout';
        document.getElementById(body).innerHTML = 'Enrolling 130 PC, 30 laptops and 27 Moible phone endpoints into Microsoft Intunes endpoint manager. Alongside setting up update rings, Antivirus, Firewall and Attack surface reduction rules.'
    }else if (modelTxt === 'TeamsBot') {
        document.getElementById(title).innerHTML = 'Teams Helpdesk Bot';
        document.getElementById(body).innerHTML = 'Created a Teams Helpdesk bot using Power Virtual Agents to help support the users quicker and reduce my simple tickets so I can focus on the more complex issues. This included automatic emails and updates using power automate and links to Sharepoint'
    }else if (modelTxt === 'NewStarter'){
        document.getElementById(title).innerHTML = 'New Starter Automation';
        document.getElementById(body).innerHTML = 'Using Power Automate to automate the new starter process for Kings Court Trust and Title Research in one flow. This cut the setup time for new starters from 2 hours to about 15 minutes depending on the specific user and removed a large portion of human error saving yet more time on bug fixes..'
    }else if (modelTxt === 'Sharepoint'){
        document.getElementById(title).innerHTML = 'Sharepoint Knowledgebase Creation';
        document.getElementById(body).innerHTML = 'I migrated the old Confluence knowledgebase that was being hosted on an Azure server into Microsoft SharePoint saving the company £150 a month. As part of this I also added features for user engagement (Countdowns, twitter feeds and the like), a site for IT support creating a more centralised location for IT help and collaboration tools to help internal teams work together more efficiently'
    }else if (modelTxt === 'Helpdesk') {
        document.getElementById(title).innerHTML = 'Internal Helpdesk Ticket System';
        document.getElementById(body).innerHTML = 'I made a internal Helpdesk Ticket System to help the IT team organise jobs and ensure all issues were logged and able to reference back to if needed. This utilised Power Automate and Microsoft Planner as they both cam e with the companies 365 licence. This resulted in a huge improvement in efficiency and user satisfaction with the department.'
    }
    else if (modelTxt === 'Switch') {
        document.getElementById(title).innerHTML = 'Network Switch Replacement';
        document.getElementById(body).innerHTML = 'Installed and configured 5 POE network switched to replace the older ones. This required the setup of 4 VLANs including Telephony, WIFI and a private VLAN for set users.'
    }
}

// current active page
let currentpage = 'home';
let modelTxt = ''

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
        lsPage()
    } else {
        clearPage()
        setTimeout(function(){
            lsPage()
        },999)
    }; 
}

function cd(){}

function cat(){
    if (currentpage == 'home'){
        catPage()
        return currentpage = 'cat';
    } else {
        clearPage()
        setTimeout(function(){
            catPage()
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
    //console.log(currentpage)
    var id = 'cmd-txt';
        const input = 'clear';
        var id = 'cmd-txt-2'
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        anima(input, '.cmd2');
        setTimeout(function(){
            document.getElementById('termial-line-2').style.zIndex = -2;
            var clearpage = currentpage + '-info';
            //console.log(clearpage)
            document.getElementById(clearpage).style.zIndex = -2;
            document.getElementById(clearpage).style.position = 'absolute';
            document.getElementById('cmd-txt').innerHTML = '';
            document.getElementById('row1').style.visibility = 'inherit';
            document.getElementById('row2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'inherit';
            document.getElementById('cursor1').style.zIndex = 0;
            document.getElementById('cmd-txt-2').innerHTML = '';
            document.getElementById('man-info').visibility = 'hidden';
            return currentpage = "home"
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
        const input = "find Projects - name '*.txt'";
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
        },3000);
}

function lsPage(){
    var id = 'cmd-txt';
    clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = "ls -lh Qualifications";
        anima("ls -lh Qualifications", '.cmd');
        setTimeout(function(){
            document.getElementById('ls-info').style.position = 'inherit';
            document.getElementById('ls-info').style.zIndex = 3;
            document.getElementById('ls-info').style.visibility = 'inherit'
            document.getElementById('man-info').visibility = 'hidden';
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'absolute';
            document.getElementById('cursor1').style.zIndex = -2;
            return currentpage = 'ls'
        },2500);
}

function catPage(){
    var id = 'cmd-txt';
    clear();
        document.getElementById(id).style.position = 'inherit';
        document.getElementById(id).style.zIndex = 0;
        const input = "cat d.ward/Socials.txt";
        anima(input, '.cmd');
        setTimeout(function(){
            document.getElementById('cat-info').style.position = 'inherit';
            document.getElementById('cat-info').style.zIndex = 3;
            document.getElementById('cat-info').style.visibility = 'inherit'
            document.getElementById('man-info').visibility = 'hidden';
            document.getElementById('termial-line-2').style.zIndex = 0;
            document.getElementById('termial-line-2').style.visibility = 'inherit';
            document.getElementById('cursor1').style.position = 'absolute';
            document.getElementById('cursor1').style.zIndex = -2;
            return currentpage = 'cat'
        },2500);
}