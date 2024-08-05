import repo from '../repositories/destinationRepo.js';
import BaseService from './BaseService.js';
class DestinationService extends BaseService {
    constructor(repo) {
        super(repo);
    }
   
}

//module.exports = new StudentService(repo);
export default new DestinationService(repo);