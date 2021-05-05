// Your code here
class Polygon {
    constructor (arr){
        this.side=arr
        this.count=this.side.length        
    }

    get countSides(){
        return this.side.length
    }     

    get perimeter(){
         let acc=0
         this.side.forEach(element => {
             acc=acc+element
         });

         return acc
    }
}

class Triangle extends Polygon{
    get isValid() {

        if(this.side.length !== 3) return;
        let side1=this.side[0]
        let side2=this.side[1]
        let side3=this.side[2]
        return ((side1+side2>side3)&&(side1+side3>side2)&&(side2+side3>side1))
                    
    }

}

class Square extends Polygon{
    get isValid() {

        if(this.side.length !== 4) return;
        let side1=this.side[0]
        let side2=this.side[1]
        let side3=this.side[2]
        let side4=this.side[3]
        return ((side1===side2)&&(side2===side3)&&(side3===side4)&&(side4===side1))
                    
    }

    get area(){
        if(this.side.length !== 4) return;
        return this.side[0]*this.side[1]        
    }


}