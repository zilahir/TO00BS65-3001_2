import axios, { AxiosInstance } from 'axios';
import Locals from '../../providers/Locals';

interface IBoredom {
    path: string;
    method: "GET" | "POST"
}

export interface BoredApiResponse {
    activity: string;
    type: string;
    participants: number;
    price: number;
    link: string;
    key: string;
    accessibility: number;
}

class BoredomAPi {
    static apiInstance: AxiosInstance;

    private static createApiInstance(): AxiosInstance {
        const axiosInstance = axios.create({
            baseURL: Locals.config().boredApiUrl
        })

        return axiosInstance;
    }

    public static async cloudFnRequest({ path, method }: IBoredom): Promise<BoredApiResponse>  {
        const instance = this.createApiInstance()
        const request = await instance.get<BoredApiResponse>(path)
        return request.data;
    }
}

export default BoredomAPi;