import vector from "./vector";
export default class Parachutist {
 
  constructor(weight, surfaceArea, airResistance, gravitationalPull,dim) {
    this.weight = weight;
    this.surfaceArea = surfaceArea
    this.dim=dim
    this.airResistance = airResistance;
    this.gravitationalPull = gravitationalPull;
     this.density = 1.225;
    this.Cd=0.5
    this.fg=this.weight*this.gravitationalPull
    }
    
    calculateHeight(initialHeight, acceleration, time) {
      // Calculate the height at each moment
      var height = initialHeight - 0.5 * acceleration * Math.pow(time, 2);
      return height;
      }

    calculateDescentRate() {
        var rateOfDescent = this.weight / (this.surfaceArea * this.airResistance * this.gravitationalPull);
        return rateOfDescent;
        }
    
        calculateThrustForceX(velocityX, Cd, cosAlpha) {
          // Calculate the drag force in the X direction
          var dragForceX = -(1 / 2) * this.density * Math.pow(velocityX, 2) * Cd * this.surfaceArea * Math.cos(cosAlpha);
          return dragForceX;
          }
          calculateThrustForceY(velocityY, Cd, cosBeta) {
          // Calculate the drag force in the Y direction
          var dragForceY = -(1 / 2) * this.density * Math.pow(velocityY, 2) * Cd * this.surfaceArea * Math.cos(cosBeta);
          return dragForceY;
          } calculateThrustForceZ(velocityX, velocityY, Cd, sinAlpha, sinBeta) {
          // Calculate the drag force in the Z direction
          var dragForceZ = -(1 / 2) * this.density * (Math.pow(velocityX, 2) + Math.pow(velocityY, 2)) * Cd * this.surfaceArea * Math.sin(sinAlpha) * Math.sin(sinBeta);
          return dragForceZ;
          }
          fd(velocity){
           return  0.5 * this.airResistance* velocity * velocity * this.Cd * this.surfaceArea
          }
          calculateAcceleration(Fg, Fd) {
          var acceleration = (Fg - Fd) / this.weight;
          // const m=new THREE.Vector3(0,0,acceleration)
          return acceleration;
          }
      
}