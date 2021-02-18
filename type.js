/*
 * @Author: your name
 * @Date: 2021-02-17 14:55:48
 * @LastEditTime: 2021-02-17 15:00:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bloge:\mycode\utils\type.js
 */
let types = ['String','Object','Array','Null','Undefined','Boolean'];
let fns = {}
types.forEach(type=>{
    fns['is'+type] = isType(type)
})

function isType(type){
    return function(obj){
        return Object.prototype.toString.call(obj).includes(type)
    }
}

export default fns
