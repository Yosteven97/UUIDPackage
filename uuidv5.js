// * uuidv5
import {v5 as uuidv5} from 'uuid'

// generate random uuid from website https://www.uuidgenerator.net/
const MY_NAMESPACE = 'e78f660b-f8eb-455d-bfcf-85e83719e949'
const resultUUIDv5 = uuidv5('nama user | password user', MY_NAMESPACE)
console.log(resultUUIDv5)