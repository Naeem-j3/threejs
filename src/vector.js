export default  class Vector {
  
     constructor(x,y,z) {
     this.x = x;
     this.y = y;
     this.z = z;
    }
    
    // ميثود لضرب المتجه بعدد
    multiply( scalar) {
    return new Vector(this.x * scalar, this.y * scalar, this.z * scalar);
    }
    // ميثود لجمع متجهين
    add( other) {
    return new Vector(this.x + other.x, this.y + other.y, this.z + other.z);
    }
      // ميثود لطرح متجه من متجه آخر
  subtract(other) {
     return new Vector(this.x - other.x, this.y - other.y, this.z - other.z);
   }
 
   // ميثود لقسمة المتجه على عدد
   divide(scalar) {
     return new Vector(this.x / scalar, this.y / scalar, this.z / scalar);
   }
}