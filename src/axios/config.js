/**
 * Create by duxin on 2019/3/7
 * 接口地址的配置
 */

 //easy-mock模拟数据接口地址
const EASY_MOCK = ' https://www.easy-mock.com/';
const MOCK_AUTH = EASY_MOCK + '5c80ca3a761c94306e4ad83b/admin'; //权限接口地址

export const MOCK_AUTH_ADMIN = MOCK_AUTH + '/ad'; //管理员权限接口
export const MOCK_AUTH_VISITOR = MOCK_AUTH + '/visitor'; //访问权限接口

//github OAUTH
export const GIT_OAUTH = 'https://github.com/login/oauth';

//github user
export const GII_USER = 'https://api.github.com/user';

//BBC top news
export const NEWS_BBC = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=429904aa01f54a39a278a406acf50070';
