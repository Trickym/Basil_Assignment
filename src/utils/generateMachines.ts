import { faker } from '@faker-js/faker';
export default function generateMachines(number:any){
    let arr = []
    for(let i = 0; i < number; i++){
        arr.push({
            id: i+1,
            name: `Aahaar Stall ${faker.number.int({ min: 1, max: 100 })}`,
            code: `(MI${faker.number.int({ min: 100, max: 200 })}`,
            address: `Aahaar Stall ${faker.number.int({ min: 1, max: 100 })}, Pragati Maidan, New Delhi`
          })
    }
    return arr
}