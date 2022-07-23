let myfun = ()=>{
    let Filter=document.getElementById("searchbox").value.toUpperCase()
    let ul = document.getElementById("Myul")
    let li = document.getElementsByTagName("li")

    for(var i=0;i<li.length;i++)
    {
        let a = li[i].getElementsByTagName("a")[0]

        let Text= a.innerText.toUpperCase()
        //console.log(Text)
        if(Text.toUpperCase().indexOf(Filter)>-1){
            li[i].style.display = ""
        }
        else{
            li[i].style.display = "none"
        }
    }
}


