import {promises as fs} from 'fs';
import {parse as csvParse} from 'csv-parse';
import { stringify as csvStringify } from 'csv-stringify';

/**
 * Read a CSV file and returns its content as a 2D array of strings
 * @param filepath The path to the CSV file
 * @returns Promise<string [][]>-
*/ 
export async function readCSVFile(filepath: string,includesHeader:boolean=false): Promise<string[][]> {
    try {
    const fileContent = await fs.readFile(filepath, 'utf-8');
    return new Promise((resolve, reject) => { 
        csvParse(fileContent,{
            trim: true,
            skip_empty_lines: true
        }, (err, records:string [][]) => {           
            if (err) reject(err);
            if(!includesHeader) records.shift();
            resolve(records);
            });
        });
    }catch (error) {
        throw new Error(`Error reading CSV file: ${error}`);
    }
}

/**
 * Write a 2D array of strings to a CSV file
 * @param filepath The path to the CSV file should be written
 * @param data The 2D array of strings to write
 * @returns Promise<void>
*/

export async function writeCsvFile(filepath: string, data: string[][]): Promise<void> {
    try{
        const csvContent = await new Promise<string>((resolve, reject) => {            
            csvStringify(data, (err, output) => {
                if (err) reject(err);
                resolve(output);
            });        });
        await fs.writeFile(filepath, csvContent, 'utf-8');
    }catch (error) {
        throw new Error(`Error writing CSV file: ${error}`);
    }
}