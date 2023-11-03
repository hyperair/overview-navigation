import { Main } from './app.js'
import { Logger } from './utils.js'

let main, logger
/*eslint-disable */

export default class OverviewNavigationExtension {
    constructor() {
        /* eslint-enable */
        try {
            logger = new Logger('Extension')
            main = new Main()
            logger.info('Initialized')
        } catch (err) {
            logger.error(err)
        }
    }

    /*eslint-disable */
    enable() {
        /* eslint-enable */
        try {
            logger.info('Enabling extension ...')
            main.start()
            logger.info('Enabled')
        } catch (err) {
            logger.error(err)
        }
    }

    /*eslint-disable */
    disable() {
        /* eslint-enable */
        try {
            logger.info('Disabling extension ...')
            main.stop()
            logger.info('Disabled')
        } catch (err) {
            logger.error(err)
        }
    }
};
