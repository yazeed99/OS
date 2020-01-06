$(document).ready(function (){
    var flag =0;
    var flag2 =0;
    var brust = [];
    var Arrival = [];
    var process =["p1","p2","p3","p4","p5","p6","p7","p8","p9","p10","p11","p12","p13","p14","p15","p16","p17","p18","p19","p20"];
    var wait= [];
    var praio=[];
    $(".key").click(function (){
        $("html, body").animate({
            scrollTop:200
        },500);
    });
    $(".Fcfs,.sjf").click(function (){
        $(".p").addClass("hid");
    })
    //GO click
    $(".b").click(function (){

        if($("#A1").text()==" "){
            alert("you have to fill the table")
        }
        else{
            if(wait.length>0){
                var e;
                for(e=0;e<20;e++){
                    wait.pop();
                    Arrival.pop();
                    brust.pop();
                    process.pop();
                    praio.pop();
                }
                $(".z").empty();
                $(".resopns").empty();
                var f;
                for(f=0;f<20;f++){
                    Arrival[f]=parseInt($("#A"+f).text());
                    brust[f]=parseInt($("#B"+f).text());
                    process[f]=$("#PO"+f).text();
                    praio[f]=parseInt($("#PR"+f).text());

                }
                console.log(wait);
                console.log(brust);
                console.log(Arrival);
                console.log(process);
            }
            if($("input[name='method']:checked").val()==1){
                var j;
                var h;
                var temp1;
                var temp2;
                var temp3;
                var temp4;
                for(j=0;j<20;j++){
                    for(h=0;h<20;h++){
                        if(Arrival[h]>Arrival[j]){
                            temp1=Arrival[j];
                            Arrival[j]=Arrival[h];
                            Arrival[h]=temp1;
                            //brust sort
                            temp2 = brust[j];
                            brust[j]=brust[h]
                            brust[h]=temp2;
                            //processes sort 
                            temp3 = process[j];
                            process[j]=process[h];
                            process[h]=temp3;
                            //wait sort
                            //             temp4 = wait[j];
                            //             wait[j]=wait[h];
                            //             wait[h]=temp4;
                            //             
                        }
                    }   
                }
                var b;
                var sum=0;
                for(b=0;b<20;b++)
                {
                    if(b==0){
                        wait.push(0);
                        sum = sum + wait[b];
                    }
                    else{
                        wait.push(wait[b-1]+brust[b-1]);
                        sum = sum + wait[b];
                    }
                }
                var v;
                var z;
                for(z=0;z<20;z++){
                    for(v=0;v<20;v++){
                        if($("#PO"+z).text()==process[v]){
                            $("#W"+z).text(wait[v]);
                        }
                    }
                }

            }
            else if ($("input[name='method']:checked").val()==2){
                var j;
                var h;
                var temp1;
                var temp2;
                var temp3;
                var temp4;
                var temp5;
                var temp6;
                for(j=0;j<20;j++){
                    for(h=0;h<20;h++){
                        if(Arrival[h]>Arrival[j]){
                            temp1=Arrival[j];
                            Arrival[j]=Arrival[h];
                            Arrival[h]=temp1;
                            //brust sort
                            temp2 = brust[j];
                            brust[j]=brust[h]
                            brust[h]=temp2;
                            //processes sort 
                            temp3 = process[j];
                            process[j]=process[h];
                            process[h]=temp3;
                            //wait sort
                            //             temp4 = wait[j];
                            //             wait[j]=wait[h];
                            //             wait[h]=temp4;
                            //             
                        }
                    }   
                }

                for(x=0;x<20;x++){
                    if(Arrival[x]==Arrival[x+1]){
                        if(brust[x]>brust[x+1]){
                            temp5=brust[x];
                            brust[x]=brust[x+1];
                            brust[x+1]=temp5;
                            //pro
                            temp6=process[x];
                            process[x]=process[x+1]
                            process[x+1]=temp6;
                        }
                    }
                }
                var b;
                var sum=0;
                for(b=0;b<20;b++)
                {
                    if(b==0){
                        wait.push(0);
                        sum = sum + wait[b];
                    }
                    else{
                        wait.push(wait[b-1]+brust[b-1]);
                        sum = sum + wait[b];
                    }
                }
                var v;
                var z;
                for(z=0;z<20;z++){
                    for(v=0;v<20;v++){
                        if($("#PO"+z).text()==process[v]){
                            $("#W"+z).text(wait[v]);
                        }
                    }
                }
            }
            else if ($("input[name='method']:checked").val()==3){
                var j;
                var h;
                var temp1;
                var temp2;
                var temp3;
                var temp4;
                var temp5;
                var temp6;
                var temp7;
                for(j=0;j<20;j++){
                    for(h=0;h<20;h++){
                        if(Arrival[h]>Arrival[j]){
                            temp1=Arrival[j];
                            Arrival[j]=Arrival[h];
                            Arrival[h]=temp1;
                            //brust sort
                            temp2 = brust[j];
                            brust[j]=brust[h]
                            brust[h]=temp2;
                            //processes sort 
                            temp3 = process[j];
                            process[j]=process[h];
                            process[h]=temp3;
                            //wait sort
                            //             temp4 = wait[j];
                            //             wait[j]=wait[h];
                            //             wait[h]=temp4;
                            temp7=praio[j];
                            praio[j]=praio[h];
                            praio[h]=temp7;
                            //             
                        }
                    }   
                }

                for(x=0;x<20;x++){
                    if(Arrival[x]==Arrival[x+1]){
                        if(praio[x]>praio[x+1]){
                            temp5=brust[x];
                            brust[x]=brust[x+1];
                            brust[x+1]=temp5;
                            //pro
                            temp6=process[x];
                            process[x]=process[x+1]
                            process[x+1]=temp6;
                            //pra

                        }
                    }
                }
                var b;
                var sum=0;
                for(b=0;b<20;b++)
                {
                    if(b==0){
                        wait.push(0);
                        sum = sum + wait[b];
                    }
                    else{
                        wait.push(wait[b-1]+brust[b-1]);
                        sum = sum + wait[b];
                    }
                }
                var v;
                var z;
                for(z=0;z<20;z++){
                    for(v=0;v<20;v++){
                        if($("#PO"+z).text()==process[v]){
                            $("#W"+z).text(wait[v]);
                        }
                    }
                }
            }
            else if ($("input[name='method']:checked").val()==4){
                var h;
                var j;
                var temp1;
                var temp2;
                var temp3;
                var re=0;
                var quan=parseInt($(".quan").val());
                console.log(quan);

                for(j=0;j<20;j++){
                    for(h=0;h<20;h++){
                        if(Arrival[h]>Arrival[j]){
                            temp1=Arrival[j];
                            Arrival[j]=Arrival[h];
                            Arrival[h]=temp1;
                            //brust sort
                            temp2 = brust[j];
                            brust[j]=brust[h]
                            brust[h]=temp2;
                            //processes sort 
                            temp3 = process[j];
                            process[j]=process[h];
                            process[h]=temp3;

                        }
                    }}
                var bo =true;
                var q;
                var bebo=Arrival[0];
                wait.push(0);
                var tempo=0;
                var coun=0;
                var coun2=0;
                while(bo){
                    var sum1=0;
                    for(q=0;q<20;q++){
                        if(brust[q]==0){
                            sum1+=brust[q];
                        }
                        else if (brust[q]==quan){
                            if(coun==0&&coun2==0){
                                re = re+Arrival[0];
                                    if(coun==0){
                                    re+=bebo;
                                }
                                $(".z").append("<th class='tg-0pky'>"+process[q]+"</th>");
                                $(".resopns").append("<td class='tg-0pky reso'  id='RS"+q+"'"+">"+Arrival[q]+"</td>");
                                bebo+=quan;
                                sum1+=brust[q];
                                brust[q]=brust[q]-quan;
                             
                            }
                            else {
                                if(coun==0){
                                    re+=bebo;
                                }
                                sum1+=brust[q];
                                brust[q]=brust[q]-quan;
                                $(".z").append("<th class='tg-0pky'>"+process[q]+"</th>");
                                $(".resopns").append("<td class='tg-0pky reso'  id='RS"+q+"'"+">"+bebo+"</td>");
                                bebo+=quan;
                            }

                        }
                        else if ( brust[q]>quan){
                            if(coun==0&&coun2==0){
                                 if(coun==0){
                                    re+=bebo;
                                }
                                $(".z").append("<th class='tg-0pky'>"+process[q]+"</th>");
                                $(".resopns").append("<td class='tg-0pky reso'  id='RS"+q+"'"+">"+Arrival[q]+"</td>");
                                bebo+=quan;
                                sum1+=brust[q];
                                brust[q]=brust[q]-quan;
                               
                            }
                            else {
                                 if(coun==0){
                                    re+=bebo;
                                }
                                brust[q]=brust[q]-quan;
                                sum1+=brust[q];
                                $(".z").append("<th class='tg-0pky'>"+process[q]+"</th>");
                                $(".resopns").append("<td class='tg-0pky reso'  id='RS"+q+"'"+">"+bebo+"</td>");
                                bebo+=quan;

                            }

                        }
                        else if ( brust[q]<quan &&brust[q]>0){
                            if(coun==0&&coun2==0){
                                 if(coun==0){
                                    re+=bebo;
                                }
                                $(".z").append("<th class='tg-0pky'>"+process[q]+"</th>");
                                $(".resopns").append("<td class='tg-0pky reso'  id='RS"+q+"'"+">"+Arrival[q]+"</td>");
                                bebo+=brust[q];
                                sum1+=brust[q];
                                brust[q]=0;
                            }
                            else{
                                 if(coun==0){
                                    re+=bebo;
                                }
                                tempo=brust[q];
                                sum1+=brust[q];

                                $(".z").append("<th class='tg-0pky'>"+process[q]+"</th>");

                                $(".resopns").append("<td class='tg-0pky reso'  id='RS"+q+"'"+">"+bebo+"</td>");
                                bebo+=brust[q]; 

                                brust[q]=0;
                            }
                        }
                        coun2++;


                    }
                    if(sum1==0){
                        bo=false;
                    }
                    coun+=1;
                }
                var fi = $(".resopns:last-child").val()+bebo;
                
                 $(".resopns").append("<td class='tg-0pky reso'  id='RS"+q+"'"+">"+fi+"</td>");
                $(".res2").text(re/20);
            }

            $("html, body").animate({
                scrollTop:200
            },500);
            if(flag2==1){
                $(".mag").css("width","1600px");
                $(".mag").css("left","0px");
            }
            if(flag==0){

                if($("input[name='method']:checked").val()==1||$("input[name='method']:checked").val()==2||$("input[name='method']:checked").val()==3){
                    var i;
                    var avgres =0;
                    for (i = 0; i <20; i++) {
                        avgres = avgres+brust[i]+wait[i];
                        $(".z").append("<th class='tg-0pky'>"+process[i]+"</th>");
                        if  (i==0)
                        {
                            $(".resopns").append("<td class='tg-0pky reso'  id='RS"+i+"'"+">"+Arrival[i]+"</td>");
                        }
                        else{
                            $(".resopns").append("<td class='tg-0pky reso'  id='RS"+i+"'"+">"+(brust[i-1]+wait[i-1])+"</td>");
                        }

                    } 
                    $(".resopns").append("<td class='tg-0pky reso'  id='RS"+i+"'"+">"+(brust[19]+wait[19])+"</td>");
                    $(".res2").text(avgres/20);
                }
            }


            $(".mag").animate({
                width:0,
                left:1550
            },15000);
            flag2 =1;
        }
        if($("#A1").text()!=" "){
        $(".result").slideDown();
        }
        $(".res1").text(sum/20);
        sum=0;

    });
    $(".quantum").hide();
    $(".pr").click(function (){
        var x = $("input[name='method']:checked").val();
        $(".p").removeClass("hid"); 
        $(".quantum").hide();
        $(".z").empty();
        $(".resopns").empty();
        $(".res1 , .h").show();
    });
    $(".rr").click(function(){
        var x = $("input[name='method']:checked").val();
        $(".quantum").show();
        $(".w").addClass("hid");
        $(".p").addClass("hid"); 
        $(".res1 , .h").hide();
    });
    //sjf radio butoon click
    $(".sjf").click(function (){
        $(".w").removeClass("hid");
        $(".quantum").hide();
        $(".z").empty();
        $(".resopns").empty();
        $(".res1 , .h").show();

    });
    //fcfs radio butoon click
    $(".Fcfs").click(function (){    
        $(".z").empty();
        $(".quantum").hide();
        $(".resopns").empty();
        $(".w").removeClass("hid");
        $(".res1 , .h").show();
    });
    // start fill the table
    $(".fi").click(function(){
        $(".z").empty();
        $(".resopns").empty();
        var e;
        for(e=0;e<20;e++){
            wait.pop();
            Arrival.pop();
            brust.pop();
            process.pop();
            praio.pop();
        }
        var f;
        for(f=0;f<20;f++){
            Arrival[f]=parseInt($("#A"+f).text());
            brust[f]=parseInt($("#B"+f).text());
            process[f]=$("#PO"+f).text();
            praio[f]=parseInt($("#PR"+f).text());

        }

        var r= $("input[name='method']:checked").val();
        if(r==1||r==2){
            var i ;
            for(i=0;i<20;i++){
                var xb = Math.floor(Math.random() * 20);
                if (xb!=0){
                    brust[i]=xb;
                }
                else {
                    brust[i]=4;
                }
                $("#B"+i).text( brust[i]);
                Arrival[i]=Math.floor(Math.random() * 20);
                $("#A"+i).text( Arrival[i]);

            }

        }
        else if(r==3){
            var i ;
            for(i=0;i<20;i++){
                var xb = Math.floor(Math.random() * 20);
                if (xb!=0){
                    brust[i]=xb;
                }
                else {
                    brust[i]=4;
                }
                $("#B"+i).text( brust[i]);
                Arrival[i]=Math.floor(Math.random() * 20);
                $("#A"+i).text( Arrival[i]);
                praio[i]=Math.floor(Math.random() * 30);
                $("#PR"+i).text(praio[i]);

            }

        }
        else if (r==4){
            var i ;
            for(i=0;i<20;i++){
                var xb = Math.floor(Math.random() * 20);
                if (xb!=0){
                    brust[i]=xb;
                }
                else {
                    brust[i]=4;
                }
                $("#B"+i).text( brust[i]);
                Arrival[i]=Math.floor(Math.random() * 20);
                $("#A"+i).text( Arrival[i]);


            }

        }
     
        $(".result").slideUp();
    });
    // end fill the table
});



