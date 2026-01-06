import urlcat from "urlcat";
/**
 *基础请求函数
 * @param {string}url-API请求路径(如'/articles')
 * @param {object}[options]-请求配置项
 * @param {string}[options.method='GET']-HTTP 方法
 * @param {object}[options.params]-URL 查询参数(如{page:1,limit:10})
 * @param {object}[options.body] - 请求体数据
 * @returns {Promise<object>}返回解析后的JSON数据
 * @example
 * 基础调用示例
 * request('/articles').then(data =>console.log(data))
 *
 * @example
 * 带查询参数的 GET 请求示例
 * request('/articles',{params:{page:1,limit:10}}).then(data =>console.log(data))
 *
 * @example
 * POST 请求示例
 * request('/articles',{method:'POST',body:{title:'新文章',content:'这是内容'}}).then(data =>console.log(data))
 */

const request = async (url, options = {}) => {
  const { method = "GET", params = {}, body = null } = options;
  // 完整的接口地址
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const requestUrl = urlcat(apiUrl, url, params);
  // 请求头
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const config = {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
  };

  const response = await fetch(requestUrl, config);

  if (!response.ok) {
    const { message, errors } = await response.json().catch(() => null);
    const error = new Error(message || "网络请求失败");
    error.status = response.status;
    error.errors = errors;
    throw error;
  }

  return await response.json();
};

export default request;

/** GET 请求 */
export const get = (url, params = {}) => request(url, { method: "GET", params });

/** POST 请求 */
export const post = (url, body = {}) => request(url, { method: "POST", body });

/** PUT 请求 */
export const put = (url, body = {}) => request(url, { method: "PUT", body });

/** PATCH 请求 */
export const patch = (url, body = {}) => request(url, { method: "PATCH", body });

/** DELETE 请求 */
export const del = (url) => request(url, { method: "DELETE"});
