/**
 * 获取URL的参数
 */

 export const queryString = ()=>{
     let _queryString = {};
     const query = window.location.search.substr(1);
     const vars = query.split('&');
     vars.forEach((v,i)=>{
        const pair = v.split("=");
        if (!_queryString.hasOwnproperty(pair[0])) {
            _queryString[pair[0]] = decodeURIComponent(pair[1]);
        }else if (typeof _queryString[pair[0]] === 'string') {
            const _arr = [_queryString[pair[0]],decodeURIComponent(pair)];
            _queryString[pair[0]] = _arr;
        }else{
            _queryString[pair[0]].push(decodeURIComponent(pair[1]));
        }
     });
     return _queryString;
 }