import axios from 'axios';
interface IData {
    title: string,
    body: string,
    userId: number,
}

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})


const createRequest = (howRoute: string, data: IData, verb: 'post' |'get' | 'delete' | 'put') => api[verb](howRoute, data)


const data = [
    {
        title: 'Baa',
        body: 'Too',
        userId: 1,
    },
    {
        title: 'Baa',
        body: 'Too',
        userId: 2,
    },
    {
        title: 'Baa',
        body: 'Too',
        userId: 3,
    },
    {
        title: 'Baa',
        body: 'Too',
        userId: 4,
    },
    {
        title: 'Baa',
        body: 'Too',
        userId: 5,
    },
    {
        title: 'Baa',
        body: 'Too',
        userId: 6,
    },
    {
        title: 'Baa',
        body: 'Too',
        userId: 7,
    },
]

const axiosall = data.map(async (item) => {
    return createRequest('/posts', item, 'post');
})

const sendAxios = async () => {
    axios.all(axiosall).then(axios.spread((...res: any) => {
        res.map((item: any) => {
            console.log(item.data,item.status)
        })
    }))
}
sendAxios()