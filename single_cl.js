let check=true,check2=true,check3=true;
function chk(){
    let email=document.getElementById('inp').value;
    let sp=email.split('@');
    let username=sp[0];
    let web=sp[1];
    try{
        if(username.length>0){
            for(var i=0;i<username.length;i++){
                if((username.charCodeAt(i)>='48'&&username.charCodeAt(i)<='57')||(username.charCodeAt(i)>='97'&&username.charCodeAt(i)<='122')||(username.charCodeAt(i)=='95')){
                    check=true;
                }else{
                    check=false;
                    break;
                }
            }
        }else{
            check=false;
        }
        let t=0;
        for(var i=0;i<web.length;i++) t+=(web.charAt(i)=='.')?1:0;
        if(t==1){
            let sp2=web.split('.');
            let w=sp2[0],w2=sp2[1];
            for(var i=0;i<w.length;i++){
                if(w.charCodeAt(i)>='97'&&w.charCodeAt(i)<='122'){
                    check2=true;
                }else{
                    check2=false;
                    break;
                }
            }
            for(var i=0;i<w2.length;i++){
                if((w2.charCodeAt(i)>='97'&&w2.charCodeAt(i)<='122')&&isNaN(w2.charCodeAt(i))==false){
                    check3=true;
                }else{
                    check3=false;
                    break;
                }
            }
        }
        alert((check==true&&check2==true&&check3==true&&t==1)?"Thank you! you will be notified":"Invalid email address")
    }catch(err){
        alert('Please enter your email address')
    }
}