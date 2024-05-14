const base_BE_URL=process.env.REACT_APP_BASE_BE_URL || 'http://localhost:3001'

export const postNewTask=async(task)=>{
    try{
        const response=await fetch(`${base_BE_URL}/todo`,
            {
                method:"POST",
                body:JSON.stringify(task),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"	
                }
            },
        )
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json()
    }catch(err){
        console.log(err)
    }
}
export const getTasks = async (searchTerm = "", sortOrder = "newest") => {
    try {
        let url = `${base_BE_URL}/todo?sort=${encodeURIComponent(sortOrder)}`;
        if (searchTerm) {
            url += `&search=${encodeURIComponent(searchTerm)}`;
        }
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (err) {
        console.log(err);
    }
};

export const deleteTask=async(id)=>{
    try{
        const response=await fetch(`${base_BE_URL}/todo/${id}`,{
            method:"DELETE"
        })
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json()
    }catch(err){
        console.log(err)
    }
}
export const updateTask=async(id,task)=>{
    try{
        const response=await fetch(`${base_BE_URL}/todo/${id}`,{
            method:"PUT",
            body:JSON.stringify(task),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"    
            }
        })
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json()
    }catch(err){
        console.log(err)
    }
}