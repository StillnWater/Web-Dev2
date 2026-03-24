async function getData() {
    try {

        const response=await fetch('link'); 
        const  data= await response.json();
        console.log(data);

    }catch (err) {
        console.error(err);
    }
    
}

