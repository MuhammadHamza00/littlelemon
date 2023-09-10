import { initializeTimes } from './Components/BookPage';

// Assuming you have Jest and jest-fetch-mock set up in your project.

// Import the function to be tested and any other dependencies
import { fetchAvailableTimes } from './ApiMimic'; // Replace 'your-module' with the actual module path
import 'jest-fetch-mock'; // Import jest-fetch-mock to mock the fetch function

describe('initializeTimes', () => {
  beforeEach(() => {
    fetch.resetMocks(); // Reset the fetch mock before each test
  });

  it('should format the current date and call fetchAvailableTimes', async () => {
    const currentDate = new Date('2023-09-10'); // Set a specific date for testing

    // Mock the fetch function to return a specific response
    fetch.mockResponseOnce(JSON.stringify({ times: ['10:00', '11:00', '12:00'] }));

    // Call the function to be tested
    const result = await initializeTimes(currentDate);

    // Expectations
    expect(result).toEqual(['10:00', '11:00', '12:00']); // Check the return value
    expect(fetch).toHaveBeenCalledTimes(1); // Ensure fetch was called once
    expect(fetch).toHaveBeenCalledWith('/your-api-endpoint/2023-09-10'); // Check the URL passed to fetch
  });

  // Add more test cases as needed
});

