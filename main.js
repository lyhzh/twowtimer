function getTimeUntilNextExecution(startTimeStr, intervalDays) {
  // 解析开始时间字符串为 Date 对象
  const startTime = new Date(startTimeStr);
  const now = new Date();

  // 如果当前时间在开始时间之前
  if (now < startTime) {
    const diff = startTime - now;
    return convertMsToTime(diff);
  }

  // 计算时间间隔的毫秒数
  const intervalMs = intervalDays * 24 * 60 * 60 * 1000;

  // 计算自开始时间以来已经过去的时间
  const elapsedMs = now - startTime;

  // 计算已经过去的完整间隔数
  const elapsedIntervals = Math.floor(elapsedMs / intervalMs);

  // 下一个执行时间
  const nextExecution = new Date(
    startTime.getTime() + (elapsedIntervals + 1) * intervalMs
  );

  // 计算剩余时间
  const remainingMs = nextExecution - now;

  return convertMsToTime(remainingMs);
}

function getCurrentPersonOnDuty(startTimeStr, intervalDays, people) {
  const startTime = new Date(startTimeStr);
  const now = new Date();

  if (now < startTime) {
    return {
      current: "尚未开始",
      next: people[0],
      nextChange: startTime,
    };
  }

  const diffMs = now - startTime;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const elapsedPeriods = Math.floor(diffDays / intervalDays);
  const currentIndex = elapsedPeriods % people.length;
  const nextIndex = (elapsedPeriods + 1) % people.length;
  const nextChange = new Date(
    startTime.getTime() +
      (elapsedPeriods + 1) * intervalDays * 24 * 60 * 60 * 1000
  );

  return {
    current: people[currentIndex],
    next: people[nextIndex],
    nextChange: nextChange,
  };
}

function convertMsToTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);

  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

const br = document.createElement("br");

const raid40StartTime = "2024-10-16T12:00:00"; // ISO 格式
const raid40IntervalDays = 7;
const timeUntilNext1 = getTimeUntilNextExecution(
  raid40StartTime,
  raid40IntervalDays
);
document.body.append(
  `Raid40 距离下次更新还有: ${timeUntilNext1.days} 天, ${timeUntilNext1.hours} 小时, ${timeUntilNext1.minutes} 分钟, ${timeUntilNext1.seconds} 秒`
);

document.body.append(br.cloneNode());
const raid20StartTime = "2024-10-22T12:00:00"; // ISO 格式
const raid20IntervalDays = 3;
const timeUntilNext2 = getTimeUntilNextExecution(
  raid20StartTime,
  raid20IntervalDays
);
document.body.append(
  `Raid20 距离下次更新还有: ${timeUntilNext2.days} 天, ${timeUntilNext2.hours} 小时, ${timeUntilNext2.minutes} 分钟, ${timeUntilNext2.seconds} 秒`
);

document.body.append(br.cloneNode());
const onyStartTime = "2024-10-16T12:00:00"; // ISO 格式
const onyIntervalDays = 5;
const timeUntilNext3 = getTimeUntilNextExecution(onyStartTime, onyIntervalDays);
document.body.append(
  `奥妮克希亚 距离下次更新还有: ${timeUntilNext3.days} 天, ${timeUntilNext3.hours} 小时, ${timeUntilNext3.minutes} 分钟, ${timeUntilNext3.seconds} 秒`
);

document.body.append(br.cloneNode());
const klzStartTime = "2024-10-22T12:00:00"; // ISO 格式
const klzIntervalDays = 5;
const timeUntilNext4 = getTimeUntilNextExecution(klzStartTime, klzIntervalDays);
document.body.append(
  `卡拉赞 距离下次更新还有: ${timeUntilNext4.days} 天, ${timeUntilNext4.hours} 小时, ${timeUntilNext4.minutes} 分钟, ${timeUntilNext4.seconds} 秒`
);

document.body.append(br.cloneNode());
const eomList = ["格里雷克", "哈扎拉尔", "雷纳塔基", "乌苏雷"];
const eomStartTime = "2023-10-24T12:00:00";
const eomIntervalDays = 14;
const timeUntilNext5 = getCurrentPersonOnDuty(
  eomStartTime,
  eomIntervalDays,
  eomList
);

const nextTimeStr = new dayjs(timeUntilNext5.nextChange).format(
  "YYYY-MM-DD hh:mm:ss"
);
document.body.append(
  `祖尔格拉布疯狂之源 当前BOSS是：${timeUntilNext5.current}`
);
document.body.append(br.cloneNode())
document.body.append(
  `祖尔格拉布疯狂之源 更新时间：${nextTimeStr}`
)
document.body.append(br.cloneNode())
document.body.append(
  `祖尔格拉布疯狂之源 下一个BOSS是：${timeUntilNext5.next}`
)
