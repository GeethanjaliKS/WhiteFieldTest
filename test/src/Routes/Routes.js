export const adminlogin =async(data)=>{
    try {
         console.log('data',data)
        return await fetch(`http://127.0.0.1:4001/adminlogin`,{
                // mode: 'no-cors',
                method:"POST",
                body: JSON.stringify(data),
                headers:{
                "Content-Type":"application/json"

            },
            })
    } catch (error) {
        console.log(error.message)
    }
    }

    export const empreg =async(data)=>{
        try {
             console.log('data',data)
            return await fetch(`http://127.0.0.1:4001/empreg`,{
                    // mode: 'no-cors',
                    method:"POST",
                    body: JSON.stringify(data),
                    headers:{
                    "Content-Type":"application/json"
    
                },
                })
        } catch (error) {
            console.log(error.message)
        }
        }

        export const viewemp =async(data)=>{
            try {
                // console.log('data',data)
                return await fetch(`http://127.0.0.1:4001/viewemp`,{
                        // mode: 'no-cors',
                        method:"GET",
                        // body: JSON.stringify(data),
                        headers:{
                        "Content-Type":"application/json"
        
                    },
                    })
            } catch (error) {
                console.log(error.message)
            }
            }

            export const updatemp =async(data)=>{
                try {
                    console.log('test',data)
                
                    return await fetch(`http://127.0.0.1:4001/updatemp/${data}`,{
                            method:"PATCH",
                            body: JSON.stringify({id:data.id,name:data.name,designation:data.designation,gender:data.gender,courses:data.courses,image:data.image,mobile:data.mobile,email:data.email}),
                            headers:{
                            "Content-Type":"application/json"
            
                        },
                        });
                      
                } catch (error) {
                    console.log(error.message)
                }
                }  

                export const deletemp =async(id)=>{
                    try {
                         console.log('data',id)
                    
                        return await fetch(`http://127.0.0.1:4001/deletemp/${id}`,{
                                method:"DELETE",
                                // body: JSON.stringify({_id:id}),
                                headers:{
                                "Content-Type":"application/json"
                
                            },
                            });
                          
                    } catch (error) {
                        console.log(error.message)
                    }
                    }