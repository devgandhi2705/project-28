class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.lauch = Constraint.create(options);
        World.add(world, this.lauch);
    }

    fly(){
        this.lauch.bodyA = null;
    }

    display(){
        if(this.lauch.bodyA){
            var pointA = this.lauch.bodyA.position;
            var pointB = this.pointB;
            stroke(0);
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    
}