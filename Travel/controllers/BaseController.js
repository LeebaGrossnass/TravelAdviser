import autoBind from "auto-bind";

class BaseController {
    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next) {
        try {   
            console.log("controller")        
            const response = await this.service.getAll(req.query);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }

    async get(req, res, next) {
        const id = req.params.id;
        try {
            const response = await this.service.getById(id);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }

    async getByCity(req, res) {
        console.log(1)
        const city = decodeURIComponent(req.params.city);
        const collectionName = req.params.collectionName;
        console.log(collectionName);
        console.log(city);
        try {
            const items = await this.service.getByCity(city, collectionName);
            console.log("controller")
            console.log(items);
            return res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    

    async update(req, res) {
        console.log("update")
        const id = req.params.id;
        console.log(id)
        // const userId = req.query;
        const data =  req.body;
            // data.VolunteerId = userId.Id;
            // data.Status = 2; 
                    
        try {
            const response = await this.service.update(id, data);
            return res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async delete(req, res) {
        const id = req.params.id;

        try {
            await this.service.delete(id);
            res.status(200).json({ message: 'Entity deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async add(req, res, next) {
        try {
            const response = await this.service.add(req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
export default BaseController;