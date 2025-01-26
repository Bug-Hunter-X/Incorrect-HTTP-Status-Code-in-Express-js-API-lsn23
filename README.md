# Incorrect HTTP Status Code in Express.js API

This repository demonstrates a common error in Express.js API development: returning a 204 No Content status code when a resource is not found, instead of the appropriate 404 Not Found code.

## Problem

The `bug.js` file contains an Express.js API route that fetches all users from a database. If no users are found, it incorrectly returns a 204 status code.  The correct response for a missing resource is a 404 status code.

## Solution

The `bugSolution.js` file provides the corrected code.  It returns a 404 status code when no users are found, conforming to HTTP standards and improving API clarity.

## How to Run

1. Clone this repository.
2. Run `npm install express` to install the required dependency.
3. Run `node bug.js` (for the buggy code) or `node bugSolution.js` (for the fixed code).