/**
 * 格式化日期
 * @param date
 * @param local
 * @returns {string}
 */
export default function formatDate(date, local) {
  if (!date || !local) return date || '';
  const d = new Date(date);
  // 明确指定英语（美国）的日期格式选项
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  const res = d.toLocaleDateString('en-US', options);
  // 将月份转换为大写
  const formattedDate = res
    .toUpperCase()
    .replace(',', ''); // 去除逗号
  // 在 day 和 year 之间插入逗号
  const finalFormattedDate = formattedDate.replace(/(\d+)(\s)(\d+)/, '$1, $3');
  return finalFormattedDate;
}

export function formatDateFmt (timestamp, fmt) {
  const date = new Date(timestamp)
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt.trim()
}
