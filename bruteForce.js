import { createReadStream } from 'fs'
import { createInterface } from 'readline'

const targetPassword = '' // Replace with the password you want to check

const bruteForceFromFile = async (filePath) => {
    try {
        const fileStream = createReadStream(filePath)
        const rl = createInterface({
            input: fileStream,
            crlfDelay: Infinity
        })

        console.time("BruteForceTime")

        for await (const line of rl) {

            if (line === targetPassword) {
                console.log(`Password found: ${line}`)
                console.timeEnd("BruteForceTime")
                return line
            }
        }

        console.log("Password not found")
        console.timeEnd("BruteForceTime")
        return null
    } catch (error) {
        console.error(`Error reading file: ${error.message}`)
        return null
    }
}

// Call the function with the path to your password file
bruteForceFromFile('./passwords.txt') // Replace with the path to your password file
