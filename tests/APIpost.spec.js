import { expect, test } from '@playwright/test';
test ('get through api',async({ request})=>{
    const response= await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect (response.status()).toBe(200);

    const data= await response.json();
    console.log("user data:",data);
    expect(data.id).toBe(1);

})