const WAIT_TIME = 1000 * 10;

const canCallApiAgain = () => {
    const lastCallTime = localStorage.getItem('callTime');
    if (!lastCallTime) {
        return true;
    }

    const currentTime = new Date().getTime();

    return currentTime - lastCallTime > WAIT_TIME;
};

const logCallTime = () => {
    const currentTime = new Date().getTime();
    localStorage.setItem('callTime', currentTime);
};

const withProxy = weatherApiObject =>
    new Proxy(weatherApiObject, {
        get(object, key) {
            if (key === 'getWeather') {
                if (!canCallApiAgain()) {
                    throw new Error(
                        'You can call API only once per 10 seconds'
                    );
                }

                logCallTime();

                return async function () {
                    const weather = await object[key]();
                    return weather;
                };
            }
        }
    });

export default withProxy;
