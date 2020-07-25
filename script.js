var start=new Date().getTime();


            function getRandomColor(){
                var letters='0123456789ABCDEF'.split('');
                var color='#';
                for (var i=0;i<6;i++){
                    color+=letters[Math.floor(Math.random()*16)];
                }
                return color;
            }






            function displayObject(){
                var top = Math.random()*400;
                var left=Math.random()* 400;
                var width=(Math.random()*200)+60;

                if (Math.random()>0.5){
                    document.getElementById('obj').style.borderRadius='50%';
                }
                else{
                    document.getElementById('obj').style.borderRadius='';
                }

                document.getElementById('obj').style.backgroundColor=getRandomColor();
                document.getElementById("obj").style.top=top+'px';
                document.getElementById('obj').style.left=left+'px';
                document.getElementById('obj').style.height=width+'px';
                document.getElementById('obj').style.width=width+'px';
                
                document.getElementById("obj").style.display='block';
                start=new Date().getTime();
            }

            function RandomWaithig(){
                setTimeout(displayObject,Math.random()*2000);
            }

            RandomWaithig();


            document.getElementById('obj').onclick=function(){
                document.getElementById('obj').style.display='none';
                var timeTaken=0;
                var end=new Date().getTime();
                timeTaken=(end-start)/1000;
                document.getElementById('timeTaken').innerHTML=timeTaken+'sec';

                RandomWaithig();
            }