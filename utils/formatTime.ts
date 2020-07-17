export default function formatTime(value: number = Date.now(), format: string = 'YYYY-MM-dd HH:mm:ss'): string{
    const time = new Date(value);
    let tempStr = format;
    for(let m of format.match(/\w+/g)){
        switch(m) {
            case 'YYYY':
                tempStr = tempStr.replace(m, `${time.getFullYear()}`);
                continue;
            case 'MM':
                const month = time.getMonth() + 1;
                tempStr = tempStr.replace(m, `${month < 10 ? `0${month}` : month}`);
                continue;
            case 'dd':
                const date = time.getDate();
                tempStr = tempStr.replace(m, `${date < 10 ? `0${date}` : date}`);
                continue;
            case 'HH':
                const hours = time.getHours();
                tempStr = tempStr.replace(m, `${hours < 10 ? `0${hours}` : hours}`);
                continue;
            case 'mm':
                const minutes = time.getMinutes();
                tempStr = tempStr.replace(m, `${minutes < 10 ? `0${minutes}` : minutes}`);
                continue;
            case 'ss':
                const seconds = time.getSeconds();
                tempStr = tempStr.replace(m,`${seconds < 10 ? `0${seconds}` : seconds}` );
                continue;
        }
    }
    console.debug('输出日期格式为：',tempStr);
    return tempStr;
}