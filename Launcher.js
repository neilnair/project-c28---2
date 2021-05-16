class Launcher{
    constructor(body,anchor)
    {
        var options={BodyA:body,
        pointB:anchor,
        stiffness:0.004,
        length:1
        }
 
        this.BodyA=body
        this.pointB=anchor
        this.launcher=Constraint.create(options)
        World.add(world,this.Launcher)



        }

        attach(body){
            this.Launcher.bodyA=body;
        }

        fly()
        {

            this.Launcher.bodyA=null;
        }

        display(){
        
            if(this.Launcher.bodyA)
            {
                var pointA=this.bodyA.position;
                var pointB=this.pointB

                strokeWeight(2);
                line(pointA.x,pointA.y,pointB.x,pointB.y)

            }
        }
    }
