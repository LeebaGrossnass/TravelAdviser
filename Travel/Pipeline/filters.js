 function filters(props) {
    const pipeline = []   
    if(props){
        if(props.Status){
            pipeline.push({ '$match':{Status: props.Status}})
        }
        else{
            pipeline.push({ '$match':{Status:"Waiting"}})
        }
        if(props.urgency){
            pipeline.push({ '$match':{Urgency: props.urgency}})
        }
    }
    return pipeline;

}
export default filters;