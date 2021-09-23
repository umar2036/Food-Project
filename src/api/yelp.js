import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer oKJ51N9rK10dar9Z2P9HMfCQ4wQ2zrtCjuvbAvOhj6kZAzbDhRmMWkv5pZmq1Hl9e9oSnunS1OF0IOICAJ2qIDoEm-FzE4Dduc9eyYOBuKqlgUy_24dFHTpTT7MxYXYx'
    }
});

