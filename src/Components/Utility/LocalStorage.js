const getStoredJobApplication = () =>{
    const storedJob = localStorage.getItem("job-application");
    if(storedJob){
        return JSON.parse(storedJob);
    }else{
        return [];
    }
}


const saveJobApplication = (id) =>{
    const  getStoredJobApplications = getStoredJobApplication();

    const exists = getStoredJobApplications.find(jobID => jobID === id);
    if(!exists){
        getStoredJobApplications.push(id);
        localStorage.setItem("job-application" , JSON.stringify(getStoredJobApplications));
    }
 }


 export {getStoredJobApplication ,saveJobApplication };