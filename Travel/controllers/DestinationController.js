import BaseController from './BaseController.js';
import service from '../services/DestinationService.js';

class DestinationController extends BaseController {
    constructor(service) {
        super(service);        
    }
    
}
export default new DestinationController(service);