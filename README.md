# Hello, LeafLink!

Thanks for taking the time to review my code challenge.

## To Run This Project

* `npm install`
* `npm start`

## Architecture Overview

* App houses each component and manages the application state. Important functions for manipulating state live here and are passed down to children through props.

* AddressDetails is an input component that collects data and then on any changes sends the new data to App.

* LineItemTable is a dynamic container for LineItems, which the user generates by clicking 'add item.' Through handlers passed down by App and LineItemTable, the LineItems use events to capture user data and send it up to App.

* Total compiles all of the balances of the LineItems, and performs calculations for taxes and discounts.

* Preview renders all of the data collected by App and formats the data into invoices.

## Featured Libraries and My Decision-Making Process

* I chose to use React as my JavaScript framework because I wanted to be able to centralize the data I collect from users into one object, which React provides through Application state.

* I use SCSS/Sass as my CSS preprocessor. In other projects I have opted for styled-components and appreciate how that library can simplify the file structure of a repo. However, I wanted easy access to Sass variables and felt it was the tool that would help me style my project most efficiently within the time for this project.

* The other libraries I chose to include are jsPDF and html2canvas. Using these two libraries I am able to take a screenshot of a given component on the user's screen and convert the image to a PDF for downloading. While I debated whether the actual form of the invoice generator should mirror the invoice it generates, I chose to build out the Preview component so that the final invoice generated didn't include buttons or other HTML markup that wouldn't translate to an offline document. Interestingly, the functionality for downloading the PDF version of the invoice works best on mobile. During a second iteration of this project, I would explore how I can configure these libraries to more effectively render the invoice data across all devices.

* One potentially controversial decision I made was to not auto-generate the balance for each LineItem. I thought about instances in which an item might not have a straightforward quantity or rate, for instance a service performed. While the subtotal and total collect all of the balance data from the LineItems, users input that balance data manually to ensure the code isn't forcing a user to generate a calculation from the rate and quantity fields if they do not apply.

## Testing

* I have included two tests, which determine whether a user is able to add and delete LineItems. I used Jest as my testing framework but am familiar with Rspec and Jasmine/Karma as well. Being that Jest is preconfigured for React projects, it made sense to move forward with that library.
