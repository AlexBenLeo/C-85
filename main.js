canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
background_image="mars.jpg";
rover_image="rover.png";
rover_width=100;
rover_height=100;
rover_x=20;
rover_y=30;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
    }
    function uploadrover(){
        ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
        }
        function my_keydown(e){
            keypressed = e.keyCode;
            console.log(keypressed);
            if (keypressed == '38') {
                up();
                console.log("up");}

         if (keypressed == '37') {
                left();
                console.log("left");
                
            }
            if (keypressed == '39') {
                right();
                console.log("right");
                 }
                 if (keypressed == '40') {
                    down();
                    console.log("down");
                 }  
                }
                function up(){
                    if (rover_y>=0){
                        rover_y=rover_y-10;
                        console.log("when up arrow is pressed, x="+rover_x+",y="+rover_y);
                        uploadbackground();
                        uploadrover();
                    }
                }
                function down(){
                    if (rover_y<=500){
                    rover_y=rover_y+10;
                    console.log("when down arrow is pressed, x="+rover_x+",y="+rover_y);
                    uploadbackground();
                    uploadrover();
                }
            }
            function left(){
                if (rover_x>=0){
                rover_x=rover_x-10;
                console.log("when left arrow is pressed, x="+rover_x+",y="+rover_y);
                uploadbackground();
                uploadrover();
            }
        }
        function right(){
            if (rover_x<=600){
            rover_x=rover_x+10;
            console.log("when right arrow is pressed, x="+rover_x+",y="+rover_y);
            uploadbackground();
            uploadrover();
        }
    }