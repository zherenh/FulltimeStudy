/*
    状态码

    1

    2
        200 OK      请求成功，一般用于GET和POST请求
        201 Created 已创建，成功请求并创建了新的资源
    3

    4
        401 Unauthorized 没有权限
        404 Not Found    服务器无法找到资源
    5
        500 Internal Server Error 服务器内部出错，无法完成请求

四种请求
    GET 查    read R
    POST 增   Change C
    PUT 改    Update U
    DELETE 删 Delete D

三种参数
    query
    params
    body
        urlencoded
        json

get不能用body参数

*/

/*
    用form表单发送post请求时，自动使用请求体，用urlencoded编码
    用jQuery表单发送ajax-post请求时，自动使用请求体，用urlencoded编码
*/