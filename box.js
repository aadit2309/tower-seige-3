class box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':0.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.score=0;
      }
      display(){
        
        if(this.body.speed < 5){
          push();
          translate(this.body.position.x, this.body.position.y);
           rotate(this.body.angle);
           rectMode(CENTER);
           rect( 0, 0, this.width, this.height);
           pop();
         }
         else{
           World.remove(world, this.body);
           
           this.Visiblity = this.Visiblity - 5;
           score+1;
           
          }

          
          
         }

         score(){
          if (this.Visiblity < 0 && this.Visiblity > -105){
            score++;
          }
      }

      
    }