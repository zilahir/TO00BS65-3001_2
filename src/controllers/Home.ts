import { Response, Request, NextFunction } from 'express';

import Locals from '../providers/Locals';
import { RootRequest } from '../routes/types';

/**
 * Handler for Home
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

class Home {
	public static index (request: (Request & RootRequest), response: Response, next: NextFunction): void {
		return response.render('pages/home', {
			welcomeText: 'TO00BS65-3001 (Project 2)',
			author: "Richard Zilahi",
			studentId: 2108162,
			routes: request.allPath ?? [],
			formatDateFns: Locals.config().formatDateFns,
			title: 'Home'
		});
	}
}

export default Home;
