import repo from '../repositories/AttractionRepo.js';
import BaseService from './BaseService.js';
class AttractionService extends BaseService {
    constructor(repo) {
        super(repo);
    }

  
}
export default new AttractionService(repo);