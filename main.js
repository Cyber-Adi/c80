NOSA=[];
function submit(){
    var DSA=[];
    
    for (var j=1; j<=5; j++)
    {
        var NOS=document.getElementById("NOS"+j).value;
        console.log(NOS);
        NOSA.push(NOS);
    }
    console.log(NOSA);
    var LNOSA=NOSA.length;
    console.log(LNOSA);

    for (var k=0; k<LNOSA; k++)
    {
        DSA.push("<h4>NAME - "+NOSA[k]+"</h4>")
        console.log(DSA);
    }

    console.log(DSA);
    document.getElementById("NWC").innerHTML=DSA;

    var RC=DSA.join("");
    console.log(RC);
    document.getElementById("NNC").innerHTML=RC;

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sorting()
{
    NOSA.sort();
    console.log(NOSA);

    var SAS=[];
    var LNOSA=NOSA.length;
    console.log(LNOSA)

    for(var k=0; k<LNOSA; k++){
        DSA.push("<h4>NAME - "+NOSA[k]+"</h4>")
        console.log(DSA);
    }
    var RC=DSA.join("");
    console.log(RC);
    document.getElementById("NNC").innerHTML=RC;
}
