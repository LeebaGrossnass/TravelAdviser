class BaseService {
    constructor(repo) {
        this.repo = repo;
    }

    async getAll(filters) {       
      console.log("service") 
        return await this.repo.getAll(filters);
      }
    
      async getById(id) {
        return await this.repo.get(id);
      }

      async getByCity(city, collectionName) {
        console.log("service") 
        return this.repo.getByCity(city, collectionName);
      }

      async update(id, data){
        try{
            const d = await this.repo.update(id, data);
            return d;
            
        }
        catch(errors){
            console.log(errors);
            throw new Error("unable to update.");
        }
    }

    async delete(id) {
      return this.repo.delete(id);
  }

    async add(data){
      try{
          let vol = await this.repo.add(data);
          return vol;
      }
      catch(errors){
          console.log(errors);
          throw new Error("unable to add destination.")
      }
  }


}

//module.exports = BaseService;
export default BaseService;