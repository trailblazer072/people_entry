let count = 0
function increment(){
    count += 1
    document.getElementById("count-no").innerText = count
    console.log(count)
}
function save(){
    if(count!=0){
        let saveNo=document.getElementById("save-no")
        let entry= count+"-"
        saveNo.textContent += entry
        console.log(entry)
        count=0
        document.getElementById("count-no").innerText=0
    }
}

