/**
 * 构造函数文件
 */
//Car的构造函数
 function Car(options) {
     this.doors = options.doors;
     this.state = options.state || "brand new";
     this.color = options.color || "silver"
 }

 function Truck(options) {
     this.state = options.state || "used";
     this.wheelSize = options.wheelSize || "large";
     this.color = options.color || "red";
 }

