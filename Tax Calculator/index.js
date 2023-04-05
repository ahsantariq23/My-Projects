

document.addEventListener("keyup" , function(event){
    //naming variables
    let initial_mtax=document.querySelector("#mt");
    let final_mtax=0;

    //salary after tax variable
    let Sat= document.querySelector("#sat");
     
    //yearly tax variable
    let yT=document.querySelector("#yt");


    //getting input field value
    let i=document.querySelector("#salary input").value;

    //representing monthly income by DOM
    document.querySelector("#mi").innerHTML=i;

    //yearly income
    yI=i*12;
    document.querySelector("#yi").innerHTML=yI;

    //1st condition
    if(yI>600000 && yI<1200000){

     //calculating monthly tax
    final_mtax=((yI-600000)*(2.5/100))/12;
    initial_mtax.innerHTML=final_mtax;

    //calculating monthly income after tax
    let salaryAtax=i-final_mtax;
    Sat.innerHTML=salaryAtax;

    //yearly tax
    let yearlyTax=((yI-600000)*(2.5/100));
    yT.innerHTML=yearlyTax;
    
    //yearly income after tax
    let yearlyFinal=yI-yearlyTax;
    document.querySelector("#yiat").innerHTML=yearlyFinal;
    }

    //2nd condition
    else if(yI>1200000 && yI<2400000){

        //calculating monthly tax
       final_mtax=(((yI-1200000)*(12.5/100))/12)+1250;
       initial_mtax.innerHTML=final_mtax;
   
       //calculating monthly income after tax
       let salaryAtax=i-final_mtax;
       Sat.innerHTML=salaryAtax;
   
       //yearly tax
       let yearlyTax=((yI-1200000)*(12.5/100))+15000;
       yT.innerHTML=yearlyTax;
       
       //yearly income after tax
       let yearlyFinal=yI-yearlyTax;
       document.querySelector("#yiat").innerHTML=yearlyFinal;
 }

//3rd condition
else if(yI>2400000 && yI<3600000){

    //calculating monthly tax
   final_mtax=(((yI-2400000)*(20/100))/12)+13750;
   initial_mtax.innerHTML=final_mtax;

   //calculating monthly income after tax
   let salaryAtax=i-final_mtax;
   Sat.innerHTML=salaryAtax;

   //yearly tax
   let yearlyTax=((yI-2400000)*(20/100))+165000;
   yT.innerHTML=yearlyTax;
   
   //yearly income after tax
   let yearlyFinal=yI-yearlyTax;
   document.querySelector("#yiat").innerHTML=yearlyFinal;
}


//4th condition
else if(yI>3600000 && yI<6000000){

    //calculating monthly tax
   final_mtax=(((yI-3600000)*(25/100))/12)+33750;
   initial_mtax.innerHTML=final_mtax;

   //calculating monthly income after tax
   let salaryAtax=i-final_mtax;
   Sat.innerHTML=salaryAtax;

   //yearly tax
   let yearlyTax=((yI-3600000)*(25/100))+405000;
   yT.innerHTML=yearlyTax;
   
   //yearly income after tax
   let yearlyFinal=yI-yearlyTax;
   document.querySelector("#yiat").innerHTML=yearlyFinal;
}

//5th condition
else if(yI>6000000 && yI<12000000){

    //calculating monthly tax
   final_mtax=(((yI-6000000)*(32.5/100))/12)+83750;
   initial_mtax.innerHTML=final_mtax;

   //calculating monthly income after tax
   let salaryAtax=i-final_mtax;
   Sat.innerHTML=salaryAtax;

   //yearly tax
   let yearlyTax=((yI-6000000)*(32.5/100))+1005000;
   yT.innerHTML=yearlyTax;
   
   //yearly income after tax
   let yearlyFinal=yI-yearlyTax;
   document.querySelector("#yiat").innerHTML=yearlyFinal;
}

//6th condition
else if(yI>12000000){

    //calculating monthly tax
   final_mtax=(((yI-12000000)*(35/100))/12)+246250;
   initial_mtax.innerHTML=final_mtax;

   //calculating monthly income after tax
   let salaryAtax=i-final_mtax;
   Sat.innerHTML=salaryAtax;

   //yearly tax
   let yearlyTax=((yI-12000000)*(35/100))+2955000;
   yT.innerHTML=yearlyTax;
   
   //yearly income after tax
   let yearlyFinal=yI-yearlyTax;
   document.querySelector("#yiat").innerHTML=yearlyFinal;

}



});
