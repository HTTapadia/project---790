array1=[]

function submit(){

    for (var j = 1; j <= 5; j++) {
        
    var name_1=document.getElementById("student_"+j).value;
    array1.push(name_1);
     }

    document.getElementById("names").innerHTML=array1;
    console.log(array1);
    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";

    var without_commas=array1.join(" ");
    document.getElementById("without_commas").innerHTML=without_commas;
}

function sort(){
    array1.sort();
    document.getElementById("without_commas").innerHTML=array1;
    document.getElementById("names").innerHTML=array1;
    console.log(array1);
}