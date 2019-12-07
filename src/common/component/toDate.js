export default function ToDate(props) {
  /*
    1分钟内：刚刚；60000ms
    1小时内：n分钟之前；60000*60=3600000
    1天内：n小时之前 3600000*24=86400000
    1周内：n天之前 86400000*7=604800000
    超出以上：直接显示具体时间
   */
  let { time } = props;
  let nowTime = Date.now();
  let newTime = new Date(time).getTime();
  let disTime = nowTime - newTime;
  if (disTime < 60000) {
    return "刚刚";
  } else if (disTime < 3600000) {
    return parseInt(disTime / 60000) + "分钟之前";
  } else if (disTime < 86400000) {
    return parseInt(disTime / 3600000) + "小时之前";
  } else if (disTime < 604800000) {
    return parseInt(disTime / 86400000) + "天之前";
  }
  return time;
}