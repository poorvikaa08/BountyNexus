// lib/fetchBugs.js
import connectMongoDB from './mongodb';
import Bug from '../models/bugsmodel'; // Adjust the path as necessary

export const fetchBugs = async () => {
    await connectMongoDB();
    const bugs = await Bug.find({});
    return bugs;
};
