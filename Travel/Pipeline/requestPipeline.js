export default function aggregation(subPipeline){
const pipeline= 
    [
        {
          '$lookup': {
            'from': 'ProblemType', 
            'localField': 'ProblemType', 
            'foreignField': 'code', 
            'as': 'ProblemType'
          }
        }, {
          '$lookup': {
            'from': 'Status', 
            'localField': 'Status', 
            'foreignField': 'Code', 
            'as': 'Status'
          }
        }, {
          '$lookup': {
            'from': 'Urgency', 
            'localField': 'Urgency', 
            'foreignField': 'Code', 
            'as': 'Urgency'
          }
        }, {
          '$unwind': {
            'path': '$Status'
          }
        }, {
          '$unwind': {
            'path': '$ProblemType'
          }
        }, {
          '$unwind': {
            'path': '$Urgency'
          }
        }, {
          '$set': {
            'Status': '$Status.Status', 
            'ProblemType': '$ProblemType.type', 
            'Urgency': '$Urgency.Level'
          }
        },     
      ]

      subPipeline.forEach(element => {
        pipeline.push(element);
      });
      return pipeline
    }