var count=0;
var a=document.getElementById("box1").addEventListener("click",function(){action(0)});
var b=document.getElementById("box2").addEventListener("click",function(){action(1)});
var c=document.getElementById("box3").addEventListener("click",function(){action(2)});
var d=document.getElementById("box4").addEventListener("click",function(){action(3)});
var e=document.getElementById("box5").addEventListener("click",function(){action(4)});
var f=document.getElementById("box6").addEventListener("click",function(){action(5)});
var g=document.getElementById("box7").addEventListener("click",function(){action(6)});
var h=document.getElementById("box8").addEventListener("click",function(){action(7)});
var i=document.getElementById("box9").addEventListener("click",function(){action(8)});

var arr=[]

var counter=""

//  var counter1=0;


//  var counter2=0;

//  var counter3=0;
 

//  var counter4=0;
 

//  var counter5=0;
 

//  var counter6=0;


//  var counter7=0;
 

//  var counter8=0;
 

function action(d)
{
   // console.log(counter1);

   // console.log(counter2);

   // console.log(counter3);

   // console.log(counter4);

   // console.log(counter5);

   // console.log(counter6);

   // console.log(counter7);

   // console.log(counter8);


   // if(counter1==3 || counter2==3 || counter3==3 || counter4==3 || counter5==3 || counter6==3 || counter7==3 ||counter8==3 )
   // {
   //    console.log("Winner");
   // }

    count++;

    
   for(var i=d;i<=d;)
   {
    

    var value=document.getElementsByClassName("sign")[i].value;

    
              

    if(value==undefined)
    {
       
        if(count==2 || count==4 || count==6 || count==8 )
        {
       var g=document.getElementsByClassName("sign")[i].innerText="1";


          
               // if(counter1==0 && i==0 )
               //    {
               //      counter1++;

               //       if( counter1==1 && i==1 )
               //       {
               //          counter1++;
               //             if(counter1==2 && i==2 )
               //             {
               //                counter1++;
               //             }
               //       }
                  
                 
               //    }

               //    if(counter2==0 && i==0 )
               //    {
               //      counter2++;

               //       if( counter2==1 && i==3 )
               //       {
               //          counter2++;
               //             if(counter1==2 && i==6 )
               //             {
               //                counter2++;
               //             }
               //       }
                  
                 
               //    }


               //    if(counter3==0 && i==0 )
               //    {
               //      counter3++;

               //       if( counter3==1 && i==4 )
               //       {
               //          counter3++;
               //             if(counter3==2 && i==8 )
               //             {
               //                counter3++;
               //             }
               //       }
                  
                 
               //    }

               //    if(counter4==0 && i==0 )
               //    {
               //      counter4++;

               //       if( counter4==1 && i==4 )
               //       {
               //          counter4++;
               //             if(counter4==2 && i==8 )
               //             {
               //                counter4++;
               //             }
               //       }
                  
                 
               //    }


               //    if(counter5==0 && i==2 )
               //    {
               //      counter5++;

               //       if( counter5==1 && i==4 )
               //       {
               //          counter5++;
               //             if(counter4==2 && i==6 )
               //             {
               //                counter5++;
               //             }
               //       }
                  
                 
               //    }




              
               // if(i==2 || i==4 || i==6)
               //    {
               //       counter4++;
                   
               //    }
              
               // if(i==3 || i==4 || i==5)
               //    {
               //       counter5++;
                   
               //    }
               
               // if(i==1 || i==4 || i==7)
               //    {
               //       counter6++;
                   
               //    }
              
               // if(i==2 || i==5 || i==8)
               //    {
               //       counter7++;
                   
               //    }
               
               // if(i==7 || i==8 || i==6)
               //    {
               //       counter8++;
                   
               //    }
               


               

        
       break;
        }
        if(count==1 || count==3 || count==5 || count==7 || count==9 )
       {
        var g=document.getElementsByClassName("sign")[i].innerText="O";
        console.log("g  "+g);

       
      //          if(i==0 || i==8|| i==4)
      //             {
      //                counter3++;
                   
      //             }
              
      //          if(i==2 || i==6|| i==4)
      //             {
      //                counter4++;
                   
      //             }
             
      //          if(i==3 || i==5|| i==4)
      //             {
      //                counter5++;
                   
      //             }
               
      //          if(i==1 || i==4|| i==7)
      //             {
      //                counter6++;
                   
      //             }
              
      //          if(i==2 || i==5|| i==8)
      //             {
      //                counter7++;
                   
      //             }
               
      //          if(i==8 || i==7|| i==6)
      //             {
      //                counter8++;
                   
      //             }
               
      //          if(i==0 || i==3|| i==6)
      //             {
      //                counter2++;
                   
      //             }
               
      //          if(i==0 || i==1 || i==2)
      //             {
      //                counter1++;
                   
      //             }
               


       break;
       }
   
    
    }

    value=arr[i];

    break;
   }


   
 

   
}

