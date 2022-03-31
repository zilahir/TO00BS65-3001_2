/**
 * Define all your Web routes
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

import { NextFunction, Router, Request, Response } from 'express';

import HomeController from '../controllers/Home';
import RandomController from '../controllers/Random';
import { MenuItem, Route } from './types';


const router = Router();

export const routes = {
    routes: [
        {
            method: "GET", path: '/', controller: HomeController.index, label: 'Home'
        },
        {
            method: "GET", path: '/boredom', controller: HomeController.index, label: 'Boredom'
        },
        {
            method: "GET", path: '/random', controller: RandomController.index, label: 'Random'
        }
    ],
    getAllRouters: (): Route[] => routes.routes,
    getAllPaths: (): string[] => routes.routes.map(route => route.label),
    getAllMenuItems: (): MenuItem[] => routes.routes.map(({path, label}) => ({
        path,
        label
    }))
}

routes.getAllRouters().map(route => {
    if (route.method === "GET") {
        return router.get(route.path, [route.controller]);
    }
})

router.post('/', [])
 

export default router;
