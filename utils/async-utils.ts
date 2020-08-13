export async function sleep(time = 1000, callback?) {
  if (typeof time !== "number") throw "first agr must be number";
  try {
    return new Promise((res, rej) =>
      setTimeout(() => {
        callback && callback();
        res();
      }, time)
    );
  } catch (error) {
    console.error(error);
  }
}

export function withTimeout(time = 1000, timeoutCallback?: Function) {
  if (typeof time !== "number") throw "first agr must be number";
  return async (resolveCallback: Promise<any>) => {
    try {
      const tAsyncFun = async () => {
        await sleep(time, () => {
          typeof timeoutCallback === "function" && timeoutCallback();
        });
        throw new Error("timeout");
      };
      await Promise.race([resolveCallback, tAsyncFun()]).catch((e) => {
        throw e;
      });
    } catch (error) {
      throw error;
    }
  };
}
