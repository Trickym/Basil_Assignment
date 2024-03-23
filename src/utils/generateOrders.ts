import { faker } from '@faker-js/faker';
async function generateOrdersArray(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
        let ordersArray: any[] = [];
        for (let i = 1; i <= 20; i++) {
            ordersArray.push({
                "serialNo": i,
                "date": faker.date.past(1).toLocaleDateString("en-GB"),
                "orderId": faker.string.alphanumeric(8).toUpperCase(),
                "machineName": `Aahaar Stall ${faker.number.int({ min: 20, max: 50 })} (MI${100 + i})`,
                "customerName": faker.person.fullName(),
                "contact": faker.phone.number("##########"),
                "amount": faker.finance.amount({ min: 50, max: 550 }), // Adjusted to generate random number within range
                "status": Math.random() > 0.5 ? "SUCCESS" : "FAILURE"
            });
        }
        // Simulate asynchronous operation (e.g., fetching data from API)
        setTimeout(() => {
            resolve(ordersArray); // Resolve the Promise with the generated ordersArray
        }, 1000); // Simulating a delay of 1 second
    });
}

export default generateOrdersArray