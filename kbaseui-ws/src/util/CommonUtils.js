/**
 * 根据当前路径获取 ws 路径
 */
export function getWsLocation(uri) {
  let cur_url = window.location
  let ws_url = ''
  if (cur_url.protocol === 'https:') {
    ws_url = 'wss:'
  } else {
    ws_url = 'ws:'
  }
  ws_url += '//' + cur_url.host
  ws_url += cur_url.pathname + uri
  return ws_url
}
