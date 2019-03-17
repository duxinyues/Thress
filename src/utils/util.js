/**
 * @param num
 * @returns {*}
 */

 export function  formatNumber(num){
     if(num<10000){
         return num;
     }

     if (num>=10000) {
         num = num/10000;
         return  num.toFixed(1)+'万';
     }
 }

 /**
  * @param description
  * @returns {{__html:*}}
  */

 export function createMarkup (description) {
    if (description) {
        description = description.replace(/(\r\n|\n|\r)/gm, '<br />')
        return {__html: description}
    }
}

/**
 * @param min 
 * @param max
 * @returns {number}
 */

 export function getRandom(min,max){
     return Math.floor(Math.random()*(max-min+1)+min);
 }
/**
 * 对时间格式处理
 * @param interval
 * @returns {string}
 */

 export  function formatTime(interval){
     interval = interval | 0;
     const minute = interval /60 | 0;
     const second = pad(interval % 60);
     return `${minute}:${second}`;
 }


 /**
  * 在数字前添加0
  * @param num 
  * @param n 填充0的个数，默认是两个
  * @returns {*}
  */

  export function pad(num,n=2){
      let len = num.toString().length;
      while(len<n){
          num = '0'+num;
          len++;
      }
      return num;
  }