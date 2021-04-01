class Enemy{
    constructor(x,y){
        this.body = createSprite(x,y,30,30);
        this.body.shapeColor = "Red";
        this.body.velocityX = -7;
        this.body.addImage(enemyImg);
        this.body.scale = 0.2;
    }
 
    move(){

        if(this.body.x<1000){
            this.body.velocityX = 0;
        }
        //console.log(this.body.x);

/*         if(keyDown("UP_ARROW")){
            this.body.y = this.body.y - 3; 
        }
        else if(keyDown("DOWN_ARROW")){
            this.body.y = this.body.y + 3; 
        }
        else if(keyDown("LEFT_ARROW")){
            this.body.x = this.body.x - 3; 
        }
        else if(keyDown("RIGHT_ARROW")){
            this.body.x = this.body.x + 3; 
        }
 */    }

    shoot(){
        /* if(keyDown("space")){
            var bullet = createSprite(this.body.x + 30, this.body.y, 15, 5);
            bullet.velocityX = 10
            bullet.shapeColor = "red";
        } */

       if(this.body.visible === true){
        if(frameCount%80 === 0){
            var laser = createSprite(this.body.x , this.body.y, 15, 2);
            laser.velocityX = -10;
            laser.shapeColor = "red";
            enemyLaserG.add(laser);
        }

        }
    
    }

    destroy(){
        
        if(this.body.isTouching(heroLaserG)){
            this.body.destroy();
            this.body.visible = false;
        }

           
    }



    
}