//로또 11~13 보너스번호 포함

window.onload = function(){

    //내 로또번호 박스
    var me = [1,2,3,4,5,6];
    
    //컴퓨터 로또 박스
    var r = [0,0,0,0,0,0];
    
    // r[0],r[1],r[2],r[3],r[4],r[5]
    

    // 보너스번호
    var b = 0;

    //당첨번호 중복없이 출력
    
    document.write("내가 선택한 로또번호 : "+me+"<br>");
    br()
    
        {r[0] = Math.floor(Math.random() * 10) + 1; 
        document.write("당첨번호"+r[0]+"번"+"<br>");}
    
        while(true){
        r[1] = Math.floor(Math.random() * 10) + 1; 
            if(r[1] != r[0]){
                document.write("당첨번호"+r[1]+"번"+"<br>");
                break;
            }
            
        }
    
        while(true){
            r[2] = Math.floor(Math.random() * 10) + 1; 
            if(r[2]!=r[0] && r[2]!=r[1]){
                document.write("당첨번호"+r[2]+"번"+"<br>");
                break;
            }
            
        }
        while(true){
            r[3] = Math.floor(Math.random() * 10) + 1; 
            if(r[3]!=r[0] && r[3]!= r[1] && r[3]!= r[2]){
                document.write("당첨번호"+r[3]+"번"+"<br>");
                break;
            }
            
        }
        while(true){
            r[4] = Math.floor(Math.random() * 10) + 1; 
            if(r[4]!=r[0] && r[4]!= r[1] && r[4]!=r[2] && r[4]!=r[3]){
            document.write("당첨번호"+r[4]+"번"+"<br>");
        break;}
        }
        while(true){
            r[5] = Math.floor(Math.random() * 10) + 1; 
            if(r[5]!=r[0] && r[5]!= r[1] && r[5]!=r[2] && r[5]!=r[3] && r[5]!=r[4]){
            document.write("당첨번호"+r[5]+"번"+"<br>");
        break;}
        }
        while(true){
            b = Math.floor(Math.random() * 10) + 1; 
            if(b != r[0] && b != r[1] && b != r[2] && b != r[3] && b != r[4] && b != r[5]){
                document.write("보너스번호:"+b+"번"+"<br>");
                document.write("<br>");
                break;
            }
        }
    // 등수
    var win = 0;
    
        for(var i=0;i<=5;i=i+1){
            for(var j=0;j<=5;j=j+1)
            {
                if(me[i]==r[j]){
                    win = win + 1;}
               
    }
        }
        br()
        //내 번호와 당첨번호 비교 for문으로 더짧게
    
    //내 번호와 일치한 당첨번호 출력
    

    for(var i=0;i<=5;i=i+1){
        if(me[0]==r[i]){
            document.write("번호 "+r[i]+" 과 일치"+"<br>");}
    }
    for(var i=0;i<=5;i=i+1){
        if(me[1]==r[i]){
            document.write("번호 "+r[i]+" 과 일치"+"<br>");}
    }
    for(var i=0;i<=5;i=i+1){
        if(me[2]==r[i]){
            document.write("번호 "+r[i]+" 과 일치"+"<br>");}
    }
    for(var i=0;i<=5;i=i+1){
        if(me[3]==r[i]){
            document.write("번호 "+r[i]+" 과 일치"+"<br>");}
    }
    for(var i=0;i<=5;i=i+1){
        if(me[4]==r[i]){
            document.write("번호 "+r[i]+" 과 일치"+"<br>");}
    }
    for(var i=0;i<=5;i=i+1){
        if(me[5]==r[i]){
            document.write("번호 "+r[i]+" 과 일치"+"<br>");}
    }
    // for(var i=0;i<=6;i=i+1){
    //     if(b == r[i]){
    //         document.write("보너스번호 "+r[i]+" 과 일치"+"<br>");}
    // }
    br()
    
    //당첨횟수 출력
    
        document.write("당첨횟수:"+win+"<br>");
        br()
    
    //등수 출력
    
    var str = "";
    switch(win){
        case 0:
        case 1:
        case 2:
            str = "꽝!!! 다음기회에";
            break;
        case 3:
            str = "5등에 당첨되셨습니다.";
            break;
        case 4:
            str = "4등에 당첨되셨습니다.";
            break;
        case 5:
            str = "3등에 당첨되셨습니다.";
            for(var i=0;i<6;i=i+1){
            if(b==me[i]){    
            str = "보너스 번호 "+b+" 와 일치하여 2등에 당첨되셨습니다.";
            }
        }
        break;
        case 6:
            str = "1등에 당첨되셨습니다.";
            break;        
        }
    document.write(str);
    }