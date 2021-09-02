data = {
    "green":{
        "color":"lime",
        "bg":"gray",
        "info":`Green.css is a nice, soothing CSS that is basically a green version of the default AoPS CSS. You can find the release <a href="https://artofproblemsolving.com/community/c66h2414540" target="_blank">here,</a> and the code <a href="https://actiniumn404.github.io/AoPS-Blog-CSS/Green.css" target="_blank">here.`
    },
    "wob":{
        "color":"rgb(156, 156, 156)",
        "bg":"black",
        "info":`White on Black.css is a simple dark mode CSS. As the title suggests, the CSS mainly consists of white features on a black background, plus some additional "special effects". You can find the release <a href="https://artofproblemsolving.com/community/c66h2550454p21796896" target="_blank">here,</a> and the code <a href="https://actiniumn404.github.io/AoPS-Blog-CSS/White-on-black.css" target="_blank">here.</a>`
    },
    "unity":{
        "color":"rgb(173, 241, 236)",
        "bg":"rgb(36 31 49)",
        "info":`Unity.css was my first CSS designed after a webpage or software. It was designed after the <kbd>Unity Game Engine</kbd>. I would like to thank @Bachsonata3 for suggesting this in a DM, and @Happycupcake for multiple code snippets. This CSS features the navigation bar and title as the toolbar at the top of the unity software, the archives as the file navigator at the left of the screen, the shouts as the console, and the rest of the sidebar as the custimization options at the bottom right of the screen. You can find the release <a href="https://artofproblemsolving.com/community/c66h2414540" target="_blank">here,</a> and the code <a href="https://actiniumn404.github.io/AoPS-Blog-CSS/Green.css" target="_blank">here.</a>`
    },
    "homework":{
        "bg":"#1b365d",
        "color":"#009fad",
        "info":`AoPS Class Homework.css is based off of the homework page of an AoPS Classroom. Kudos to the pr0 CSS, AIME, Math, and Alcumus god @Zhaom <img src="https://artofproblemsolving.com/assets/images/smilies/notworthy.gif"> for some code snippets and overall helping me with the code. You can find the release <a href="https://artofproblemsolving.com/community/c66h2618824_release_aops_class_homeworkcss" target="_blank">here,</a> and the code <a href="https://actiniumn404.github.io/AoPS-Blog-CSS/AoPS%20Class%20Homework.css" target="_blank">here.</a>`

    },
    "zoom":{
       "bg":"rgb(44, 44, 44)",
       "color":"#2d8cff",
        "info":`Zoom.css is a CSS that is based off of the Zoom Meeting Software produced by Zoom Video Communications Inc. This features a flexbox repersentation of the posts as people in a zoom meeting, the contributors and shouts as the participants and chat windows to the right side of the screen respectively, and the rest of the sidebar with special hover effects as the menu bar at the bottom of the screen.  You can find the release <a href="https://artofproblemsolving.com/community/c66h2633778_release_zoomcss" target="_blank">here,</a> and the code <a href="https://actiniumn404.github.io/AoPS-Blog-CSS/Zoom.css" target="_blank">here.</a>`
    },
    "gmail":{
        "bg":"#064628",
        "color":"#ffc4c4",
        "info":`Gmail.css is probably one of my most accurate CSS's to this date. As you might guess from the title, Gmail.css is based off of the email service "Gmail" created by Google Inc. It features the navigation bar to the left side, and the posts as emails to the right. You can find the release <a href="https://artofproblemsolving.com/community/c66h2637511" target="_blank">here,</a> and the code <a href="https://actiniumn404.github.io/AoPS-Blog-CSS/gmail.css" target="_blank">here.</a>`
    },
    "khan":{
        "bg":"#0a2a66",
        "color":"#14bf96", 
        "info":`Khan Academy.css is a simple repersentation of the Khan Academy website. You can find the release <a href="https://artofproblemsolving.com/community/c66h2643820_release_khan_academycss" target="_blank">here,</a> and the code <a href="https://actiniumn404.github.io/AoPS-Blog-CSS/KhanAcademy.css" target="_blank">here.</a>`
    },
    "github":{
        "bg":"black",
        "color":"white",
        "info":`Github.css is one my most accurate CSS up to the date of which I am writing this. This CSS is an accurate repersentation of a GitHub repo (along with some components off of a GitHub Issue and a GitHub wiki page) with both light and dark modes. You can find the release <a href="https://artofproblemsolving.com/community/q1h2653472p22974236" target="_blank">here,</a> and the code <a href="https://actiniumn404.github.io/AoPS-Blog-CSS/Github.css" target="_blank">here.</a></p>`
    },
    "stackoverflow":{
        "bg":"rgb(202 109 33)",
        "color":"white",
        "info":`Stack Overflow.css is one of my most accurate CSS's up to this date. This was a colaboration between AoPS Users Player01 and Forester2015. See more on the release page <a href="https://artofproblemsolving.com/community/c66h2662726_release_stackoverflowcss">here</a> and the code on the GitHub repo <a href="https://github.com/Blog-CSS/Blog-CSS.github.io/blob/main/Stackoverflow.css">here</a>`
    }

}


currentgo = null
locations = ["welcome", "greencss", "wob", "unity", "homework", "zoom", "gmail", "khan", "github", "stackoverflow"]

function typetitle(emt,typertext, aftertext, speed){
    emt.html("")
    console.log(`Started typing "${typertext}" in the ${emt.parent().prop("id")} typewriter`)
    charPos = 0
    currentgo = emt.parent().prop("id")
    i=setInterval(() => {
        if (currentgo !== emt.parent().prop("id")){
            charPos = typertext.length
            console.log(`Stopped ${emt.parent().prop("id")} because of outdated typewriter`)
        }
        if (charPos >= typertext.length){
            if (aftertext === null){
                aftertext = typertext
            }
            emt.html(aftertext)
            clearInterval(i)
        }
        emt.append(typertext[charPos])
        charPos++
    }, speed);
}

function next(id, scroll=true){
    console.log(id)
    if (scroll){
        window.scrollTo(0, id*window.innerHeight)
    }
    /*if (id === 0){
        window.scrollTo(0,0)
    }*/
    currentgo=null
    setTimeout(()=>{
        if (id >= locations.length){
            typetitle($('#end p'), 'Thanks for reading', null, 100)
        }
        switch(id){
            case 0:
                typetitle($("#titletext"),"AoPS Blog CSS by Actiniumn404 (AoPS)", `AoPS Blog CSS by <a href="https://actiniumn404.github.io/">Actiniumn404</a> (<a href="https://artofproblemsolving.com/community/user/499928">AoPS</a>)`, 70)
                break

            case 1:
                typetitle($('#green h1'), 'Green.css', null, 100)
                break

            case 2:
                typetitle($('#wob h1'), 'White on Black.css', null, 100)
                break
            
            case 3:
                typetitle($('#unity h1'), 'Unity.css', null, 100)
                break

            case 4:
                typetitle($('#homework h1'), 'AoPS Class Homework.css', null, 100)
                break

            case 5: 
                typetitle($('#zoom h1'), "Zoom.css", null, 100)
                break
            
            case 6: 
                typetitle($('#gmail h1'), "Gmail.css", null, 100)
                break
                
            case 7: 
                typetitle($('#khan h1'), "Khan Academy.css", null, 100)
                break

            case 8: 
                typetitle($('#github h1'), "GitHub.css", null, 100)
                break

            case 9:
                typetitle($('#stackoverflow h1'), "Stack Overflow.css", null, 100)
                break

        }
    }, 500)
}
// ===== Main =====
jsonid = 2
for (i in data){
    itemname = data[i]
    $("#csses").append(`
    <div id="${i}" style="--bg:${itemname.bg};--color:${itemname.color};" class="panel">
        <svg class="arrowdown" height="22" width="40" onclick="next(${jsonid})">
            <path d="M 0 0 l 20 20 l 20 -20" stroke-width="3" fill="none"></path>
        </svg>
        <h1></h1>
        <p>${itemname.info}</p>
    </div>
    `)
    jsonid++
}


window.scrollTo(0,0)
typetitle($("#titletext"),"AoPS Blog CSS by Actiniumn404 (AoPS)", `AoPS Blog CSS by <a href="https://actiniumn404.github.io/" target="_blank">Actiniumn404</a> (<a href="https://artofproblemsolving.com/community/user/499928" target="_blank">AoPS</a>)`, 70)
if (window.location.hash !== ""){
    if (!locations.includes(window.location.hash.substring(1))){
        next(0, false)
    }else{
        next(locations.indexOf(window.location.hash.substring(1)), false)
    }
}
window.onscroll = function(){
    let s = window.scrollY
    let t = window.innerHeight
    let hash = locations.indexOf(window.location.hash.substring(1))
    if (s >= 1 * t && s < t * (locations.length - 1)){
        $("#aboutbox").css("opacity", "0")
    }
    /*if (hash !== -1){
        if (s > t*(hash-1) && s < t*(hash+1)){
            $("#aboutbox").css("opacity", "0")
        }
    }*/
    else{
        $("#aboutbox").css("opacity", "1")
    }
}