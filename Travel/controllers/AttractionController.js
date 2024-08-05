import BaseController from './BaseController.js';
import service from '../services/AttractionService.js';

class AttractionController extends BaseController {
    constructor(service) {
        super(service);        
    }
    
}
export default new AttractionController(service);