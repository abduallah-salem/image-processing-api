import { promises as fs, Stats } from 'fs'

/**
 * This function takes a filePath argument to check if the file exists or not
 * @param filePath Path to the file that we need to look up
 * @returns a string of `Found` or `Not found` based on the results
 */
const checkFileExists = async (filePath: string): Promise<string> => {
    //Declare the result variable and set a default value of `Not found`
    let result: string = `Not found`
    //Try Catch block that uses the fs.statSync to check if the file exists or not and if the file is found set the value of result to `Found`
    try {
        const fileStatus: Stats = await fs.stat(filePath)
        if (fileStatus.isFile()) {
            result = `Found`
        }
    } catch (e) {
        return result
    }
    return result
}

export default checkFileExists
