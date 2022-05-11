For this algorithm, I chose to go with a nested for loop.

On line 8, we're initiating the first (or outer) loop. We start at the zero index position, and increment until the second-to-last index position. We don't need to loop over the last index position with the outer loop, because we are looking for the sum of the values of two different indices. Summing the last index with itself wouldn't make sense to meet the algorith requirements.

On line 9, we start an inner loop. This loop looks at the value of the element in the j-index position of the *nums* array. This loop does iterate to the final index position of the array.

The conditional if statement beginning on line 10 adds the current value of the i-index to the j-index. If the sum of the value of the two indices equals the *target* number, we return an array containing the index numbers currently at i and j.

Since the algorithm instructions say that the array passed through the function as *nums* WILL contain two numbers that add to *target*, we don't really need an **return false** or similar line at the bottom of our function. The array is guaranteed to work with the algorithm, so we only need to worry about returning the right indices.
