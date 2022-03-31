import { Response, Request, NextFunction } from 'express';

import { RootRequest } from '../routes/types';
import BoredomAPi from './Api/BoredomApi';

/**
 * Handler for Random
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

class Random {
    public static async index (request: (Request & RootRequest), response: Response, next: NextFunction): Promise<void> {
        const randomBoredResponse = await BoredomAPi.cloudFnRequest({path: '/activity', 'method': "GET"})
        console.log('randomBoredResponse', randomBoredResponse);
        return response.render('pages/random', {
            routes: request.allPath ?? [],
            title: 'Random',
            random: {
                ...randomBoredResponse
            }
        })
    }
}

export default Random;