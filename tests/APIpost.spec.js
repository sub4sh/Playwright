import { expect, test } from '@playwright/test';
test('post from api',async( {request} )=>{
    const response=request.post('https://jsonplaceholder.typicode.com/posts',{
        data:{
            title:"QA automation Enginner",
            body:"learn automation",
            userid:1
        }
    })
    expect(response.status()).tobe(201);
    const data = (await response).json();
    console.log("data posted are:",data);
    expect(data.title).tobe('QA automation Enginner');
    
})