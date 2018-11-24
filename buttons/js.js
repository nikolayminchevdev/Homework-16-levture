var expanded1=false,
    expanded2=false,
    expanded3=false;


function expand(planet){
    if (planet==="mercury" && expanded1==false)
    {   
        var expandMercury = document.getElementById('acordeonContent');
        expandMercury.setAttribute('style', 'display: block;');
        expanded1=true;
    }
    else{
        var expandMercury = document.getElementById('acordeonContent');
        expandMercury.setAttribute('style', 'display: none;');
        expanded1=false;
    }

    if (planet==="venus" && expanded2==false)
    {
        var expandVenus = document.getElementById('acordeonContent2');
        expandVenus.setAttribute('style', 'display: block;');
        expanded2=true;
    }
    else
    {
        var expandVenus = document.getElementById('acordeonContent2');
        expandVenus.setAttribute('style', 'display: none;');
        expanded2=false;
    }


    if (planet==="earth" && expanded3==false)
    {
        var expandEarth = document.getElementById('acordeonContent3');
        expandEarth.setAttribute('style', 'display: block;');
        expanded3=true;
    }
    else{
        var expandEarth = document.getElementById('acordeonContent3');
        expandEarth.setAttribute('style', 'display: none;');
        expanded3=false;
    }

}