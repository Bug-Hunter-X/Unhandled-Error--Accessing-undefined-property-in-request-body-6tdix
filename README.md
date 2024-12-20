# Unhandled Error: Accessing undefined property in request body

This repository demonstrates a common error in Express.js applications: accessing undefined properties in the request body without proper error handling.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

## Problem
The original code attempts to access the `user.name` property from the request body directly, without checking if `user` or `user.name` exists. If the request body is malformed or doesn't include the `name` property, this will lead to a runtime error, causing the server to crash.

## Solution
The solution involves adding comprehensive error handling. This includes checking if the request body exists and contains the necessary properties before attempting to access them.  The solution also demonstrates using a more robust response mechanism. 