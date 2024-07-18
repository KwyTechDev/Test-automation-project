//Include playwright module
const{test,expect} = require('@playwright/test');


// write a test
test('validate Youtube Title', async({page})=>{

  // go to url
  await page.goto('https://www.youtube.com');

//search field with keywords
await page.getByPlaceholder('Search').click();
//fill the search area
await page.getByPlaceholder('Search').fill('hubtel');

//expect the element
await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();

//click on search button
await page.getByRole('button', { name: 'Search', exact: true }).click();

// click on the video
await page.getByRole('link', { name: 'Hubtel @hubtel503•2.37K' }).click();

// validation 
await expect(page).toHaveTitle('Hubtel-YouTube');

}

)

